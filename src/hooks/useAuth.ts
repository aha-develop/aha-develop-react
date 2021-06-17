import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthState, getServiceAuthContext } from "../AuthProvider";

interface UseAuthOptions<R> {
  /** Optional service name. Only required if multiple services are used */
  serviceName?: string;
  /** Initial data */
  data?: R;
}

interface UseAuthCallback<R> {
  (authData: unknown): Promise<R>;
}

interface UseAuthState<R> extends Omit<AuthState, "authData"> {
  /** The data returned by the callback. Will be null until loaded */
  data: R | null;
  /** True once authed is true while the data is loading */
  loading: boolean;
  /** Force authentication and fetching the data */
  fetchData(): Promise<boolean>;
}

/**
 * When this hook is called, if the user has already authenticated with the
 * remote service then the callback is run immediately to populate the data.
 *
 * If the user has not yet authenticated then the callback will not be run. The
 * authed flag will be false. The component can force the user to authenticate
 * by calling fetchData()
 *
 * @param callback Async function that is given the authData once the user has
 *   authenticated and returns the data for the component
 * @param options
 * @param deps Dependencies for the callback function. The data will be
 *   refetched each time these change IF the user is authenticated
 */
export function useAuth<R>(
  callback: UseAuthCallback<R>,
  options: UseAuthOptions<R> = {},
  deps: React.DependencyList = []
): UseAuthState<R> {
  const context = useMemo(
    () => getServiceAuthContext(options.serviceName),
    [options.serviceName]
  );
  const authState = useContext(context);
  const { authed, authData, error: authError, handleReauth } = authState;
  const [error, setError] = useState(authError);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<R | null>(options.data || null);

  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await callback(authData);
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [authData, ...deps]);

  // Force authentication and/or refetch the data
  const fetchData = async () => {
    setLoading(true);
    setData(null);

    if (authed) {
      getData();
      return true;
    } else {
      return handleReauth();
    }
  };

  // Fetch the data once authed
  useEffect(() => {
    if (authError) {
      setError(authError);
      return;
    }
    if (!authed) {
      setError(null);
      setLoading(false);
      return;
    }

    getData();
  }, [authed, authError]);

  // Refetch data if user deps change
  useEffect(() => {
    if (!deps || deps.length === 0) return;
    // Although authed is checked, its not a dep because this should not be run
    // if it changes
    if (authed) getData();
  }, deps);

  return { data, error, authed, loading, fetchData };
}
