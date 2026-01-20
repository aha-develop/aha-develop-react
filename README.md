# React helper utilities for Aha! develop extensions

Install:

```
npm install @aha-develop/aha-develop-react
```

or

```
yarn add @aha-develop/aha-develop-react
```

## Hooks

### useAuth

Run a callback with authentication to an external service and return the data and/or the auth and loading state.

```js
import { useAuth } from "@aha-develop/aha-develop-react";

function LoadPullRequests(props) {
  const { loading, authed, data, fetchData } = useAuth(async (authData) => {
    const api = octokit.defaults({
      headers: { authorization: `token ${authData.token}` },
    });

    return await api(FETCH_PULL_REQUESTS_QUERY);
  });

  if (loading) {
    return <aha-spinner />;
  }

  if (!authed) {
    return <button onClick={fetchData}>Load pull requests</button>;
  }

  const pullRequests = data.map((pr, idx) => <PullRequest key={idx} pr={pr} />);

  return <ul>{pullRequests}</ul>;
}
```

In this example component the callback fetches the data from github. The callback will only be run if the user is authenticated with github. When the component loads it will check the authentication status. If they are not authenticated then `authed` will be false and the component can display a button to prompt the user to authenticate.

If `loading` is true then the user is authenticated and the data is being requested.

The component must be wrapped in an AuthProvider. This would usually be done at the root node:

```js
import { AuthProvider } from "@aha-develop/aha-develop-react";

aha.on("pullRequests", () => {
  return (
    <AuthProvider serviceName="github" serviceParameters={{ scope: "repo" }}>
      <App />
    </AuthProvider>
  );
});
```

#### Multiple services

It's possible to use multiple services in one extension with useAuth:

```js
<AuthProvider serviceName="github">
  <AuthProvider serviceName="gitlab">
    <App />
  </AuthProvider>
</AuthProvider>
```

```js
const { data, loading, authed, fetchData } = useAuth(fetchGitlabPrs, {
  serviceName: "gitlab",
});
const { data, loading, authed, fetchData } = useAuth(fetchGithubPrs, {
  serviceName: "github",
});
```

If no serviceName is provided then the first registered AuthProvider is used.

### useOutsideAlerter

If there is a modal or popup component controlled by the extension then
capturing mouse clicks outside the area of the popup can be tricky due to the
shadowRoot container. This hook will set up a container aware event handler:

```js
function Popup({ onClose }) {
  const popupEl = useRef(null);
  useOutsideAlerter(popupEl, () => onClose());

  return (
    <div ref={popupEl}>
      I'm a popup
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```

The event defaults to "mousedown" and can be customised:

```js
useOutsideAlerter(popupEl, onClose, { event: "mousemove" });
```

### useClipboard

This is a simple clipboard helper for React components to copy text to the clipboard and show an indicator for a short time:

```js
function CopyableId({ id }) {
  const [onCopy, copied] = useClipboard();

  return (
    <div>
      <span>{id}</span>
      <button onClick={() => onCopy(id)}>
        <i className="fa-regular fa-copy"></i>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
```

## Components

### EmbeddedContent

Embeds content via an iframe. Constrains element size based on aspect ratio. Sanitizes user input.

```js
<EmbeddedContent src="https://my.site.xzy/design.png" aspectRatio={1.333} />
```

## Patterns

### EmbeddedContentAttribute

Fully-featured component for managing embedded content associated with an Aha! Record. Collects a URL as user input, stores it as extension data on the record, and displays the URL at a fixed aspect ratio when set.

```js
import React from "react";
import { EmbeddedContentAttribute } from "@aha-develop/aha-develop-react";

aha.on("myServiceAttribute", ({ record, fields }, { identifier }) => {
  const ensureEmbedFlags = async (url) => {
    if (url.includes("emb=1")) {
      return url;
    } else {
      return `${url}?emb=1&ios=false&frameless=false`;
    }
  };

  return (
    <EmbeddedContentAttribute
      identifier={identifier}
      record={record}
      fields={fields}
      product="MyService"
      placeholder="https://my.site.xyz/embed/..."
      onLinkUpdated={ensureEmbedFlags}
    />
  );
});
```

## Events

Helper functions to aid capturing the output of a registered server event. This pattern is useful when you need to call third party API endpoints from a server side event and have the result captured.

### registerEventHandler

Register a server-side event handler with typed input and output schemas.

```TS
import * as z from "zod";
import { callEventHandler, registerEventHandler } from "@aha-develop/aha-develop-react";

const CreateSessionSchema = z.object({
  title: z.string(),
  prompt: z.string(),
});
type CreateSession = z.infer<typeof CreateSessionSchema>;

const DevinSessionDataSchema = z.object({
  sessionId: z.string(),
  sessionUrl: z.string(),
  assignedAt: z.string(),
});
type DevinSessionData = z.infer<typeof DevinSessionDataSchema>;

registerEventHandler({
  extensionId: EXTENSION_ID,
  eventName: "createDevinSession", // This should be registered in package.json
  schema: CreateSessionSchema,
  resultSchema: DevinSessionDataSchema,
  handler: async (args, { settings: rawSettings }) => {
    // args is typed as CreateSession

    // ... access secret settings here
    // ... call a third party API

    // event handler ensures return type matches resultSchema argument
    return {
      sessionId,
      sessionUrl,
      assignedAt
    }
  }
})
```

### callEventHandler

Execute a function defined by **registerEventHandler**. This enables client side code to execute functions on the server and capture their output.

```TS
// Export a function which calls the session handler
// This can be called client side
export async function createDevinSession(
  args: CreateSession,
): Promise<DevinSessionData> {
  return callEventHandler<DevinSessionData>({
    extensionId: EXTENSION_ID,
    eventName: "createDevinSession",
    args,
  });
}
```
