import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

export interface AuthState {
  error: string | null;
  authed: boolean | null;
  authData: unknown;
}

interface AuthContext extends AuthState {
  handleReauth(): Promise<boolean>;
}

type ClearAction = { type: "clear" };
type AuthedAction = { type: "authed"; authData: unknown };
type ErrorAction = { type: "error"; message: string };
type AuthAction = ClearAction | AuthedAction | ErrorAction;

function unauthed(): AuthState {
  return { error: null, authData: null, authed: null };
}

const serviceAuthContexts: Map<string, React.Context<AuthContext>> = new Map();
let firstAuthContext: string | undefined;

/**
 * Create a new ServiceAuthContext. If one already exists for the given name
 * then it is returned.
 */
function createServiceAuthContext(serviceName: string) {
  const existingContext = serviceAuthContexts.get(serviceName);
  if (existingContext) return existingContext;

  const context = createContext<AuthContext>({
    ...unauthed(),
    handleReauth: async () => false,
  });
  serviceAuthContexts.set(serviceName, context);
  firstAuthContext ??= serviceName;
  return context;
}

/**
 * Get an existing ServiceAuthContext. If none exist by the requested name then
 * it raises. If no serviceName is passed then the first registered context is
 * returned, or it raises.
 */
export function getServiceAuthContext(
  serviceName?: string
): React.Context<AuthContext> {
  if (!serviceName) serviceName = firstAuthContext;
  if (!serviceName) throw new Error("No service authentication is setup");

  const context = serviceAuthContexts.get(serviceName);
  if (!context)
    throw new Error(`No service authentication for ${serviceName} is setup`);

  return context;
}

/**
 * Reducer for the auth context value
 */
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "authed":
      return { ...state, error: null, authData: action.authData, authed: true };
    case "error":
      if (action.message.includes("Token is not available")) {
        return {
          ...unauthed(),
          authed: false,
        };
      } else {
        return {
          ...state,
          error: action.message,
          authData: null,
          authed: false,
        };
      }
    case "clear":
    default:
      return unauthed();
  }
}

interface AuthProviderProps {
  serviceName: string;
  serviceParameters: unknown;
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  serviceName,
  serviceParameters,
  children,
}: AuthProviderProps) => {
  const context = useMemo(
    () => createServiceAuthContext(serviceName),
    [serviceName]
  );

  const [authState, dispatch] = useReducer(authReducer, unauthed());

  const loadCachedAuth = useCallback(async () => {
    try {
      const authData = await aha.auth(serviceName, {
        useCachedRetry: true,
        reAuth: false,
        parameters: serviceParameters,
      });
      dispatch({ type: "authed", authData });
    } catch (err) {
      dispatch({ type: "error", message: (err as Error).message });
    }
  }, [serviceName, serviceParameters, dispatch]);

  const handleReauth = useCallback(async () => {
    dispatch({ type: "clear" });

    try {
      const authData = await aha.auth(serviceName, {
        useCachedRetry: true,
        reAuth: true,
        parameters: serviceParameters,
      });
      dispatch({ type: "authed", authData });
      return true;
    } catch (err) {
      dispatch({ type: "error", message: (err as Error).message });
      return false;
    }
  }, [serviceName, serviceParameters, dispatch]);

  // On load load the cached auth
  useEffect(() => {
    loadCachedAuth();
  }, []);

  const authContext = useMemo(() => {
    return { ...authState, handleReauth };
  }, [authState, handleReauth]);

  return <context.Provider value={authContext}>{children}</context.Provider>;
};

export { AuthProvider };
