import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from "react";

interface AuthState {
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
  children: JSX.Element;
}

export function AuthProvider({
  serviceName,
  serviceParameters,
  children,
}: AuthProviderProps) {
  const context = useMemo(() => createServiceAuthContext(serviceName), [
    serviceName,
  ]);

  const [authState, dispatch] = useReducer(authReducer, unauthed());

  const loadCachedAuth = useCallback(
    () => async () => {
      try {
        const options = { useCachedRetry: true, parameters: serviceParameters };
        const authData = await aha.auth(serviceName, options);
        dispatch({ type: "authed", authData });
      } catch (err) {
        dispatch({ type: "error", message: err.message });
      }
    },
    [serviceName, serviceParameters, dispatch]
  );

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
      dispatch({ type: "error", message: err.message });
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
}
