import { z } from "zod";

interface ServerSuccess<T> {
  ok: true;
  result: T;
}

interface ServerError {
  ok: false;
  message: string;
}

type ServerResponse<T> = ServerSuccess<T> | ServerError;

/**
 * Base schema that all event handlers must include.
 * Provides the eventKey used for result storage.
 */
const baseEventSchema = z.object({
  eventKey: z.string(),
});

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function generateEventKey(eventName: string): string {
  return `${eventName}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

async function writeResult<T>({
  extensionId,
  eventKey,
  payload,
}: {
  extensionId: string;
  eventKey: string;
  payload: ServerResponse<T>;
}): Promise<void> {
  await aha.account.setExtensionField(extensionId, eventKey, payload);
}

function storeError(message: string): ServerError {
  return { ok: false, message };
}

function storeSuccess<T>(result: T): ServerSuccess<T> {
  return { ok: true, result };
}

type CallServerOptions = {
  pollInterval?: number;
  timeoutMs?: number;
};

const DEFAULT_POLL_INTERVAL = 1000;
const DEFAULT_TIMEOUT_MS = 60000;

export async function callEventHandler<T>({
  extensionId,
  eventName,
  args,
  options = {},
}: {
  extensionId: string;
  eventName: string;
  args: Record<string, unknown>;
  options?: CallServerOptions;
}): Promise<T> {
  const {
    pollInterval = DEFAULT_POLL_INTERVAL,
    timeoutMs = DEFAULT_TIMEOUT_MS,
  } = options;

  const eventKey = generateEventKey(eventName);

  // Clear any previous response with the same key
  await aha.account.clearExtensionField(extensionId, eventKey).catch(() => {
    /* no-op */
  });

  // Trigger the server event with args + eventKey
  aha.triggerServer(`${extensionId}.${eventName}`, {
    ...args,
    eventKey,
  });

  const timeoutAt = Date.now() + timeoutMs;

  // Poll for result
  do {
    await delay(pollInterval);

    const stored = await aha.account.getExtensionField<ServerResponse<T>>(
      extensionId,
      eventKey,
    );

    if (stored) {
      // Clean up the stored result
      await aha.account.clearExtensionField(extensionId, eventKey).catch(() => {
        /* ignore */
      });

      if (stored.ok) {
        return stored.result;
      }

      console.warn(
        `Event handler error ${extensionId}.${eventName} ${JSON.stringify(
          stored,
        )}`,
      );

      const message =
        "message" in stored
          ? stored.message
          : "Server reported an unknown error";
      throw new Error(message);
    }
  } while (Date.now() < timeoutAt);

  throw new Error(`Timed out waiting for ${eventName} response`);
}

export function registerEventHandler<
  TSchema extends z.ZodType,
  RSchema extends z.ZodType,
>({
  extensionId,
  eventName,
  schema,
  handler,
}: {
  extensionId: string;
  eventName: string;
  schema: TSchema;
  resultSchema: RSchema;
  handler: (
    args: z.infer<TSchema>,
    context: Aha.Context,
  ) => Promise<z.infer<RSchema>>;
}) {
  aha.on({ event: `${extensionId}.${eventName}` }, async (args, context) => {
    const eventKeyResult = baseEventSchema.safeParse(args);
    if (!eventKeyResult.success) {
      console.error(
        `Missing or invalid eventKey in arguments for ${extensionId}.${eventName}`,
      );
      return;
    }
    const eventKey = eventKeyResult.data.eventKey;
    const parsed = schema.safeParse(args);

    if (!parsed.success) {
      await writeResult({
        extensionId,
        eventKey,
        payload: storeError(
          "Invalid arguments passed to event handler: " + parsed.error.message,
        ),
      });

      return;
    }

    try {
      const result = await handler(parsed.data, context);
      await writeResult({
        extensionId,
        eventKey,
        payload: storeSuccess(result),
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : String(error ?? "Unknown error");
      await writeResult({
        extensionId,
        eventKey,
        payload: storeError(message),
      });
    }
  });
}
