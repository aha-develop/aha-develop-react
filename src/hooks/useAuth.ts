import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getServiceAuthContext } from "../ServiceAuth";

interface UseAuthOptions<R> {
  /** Optional service name. Only required if multiple services are used */
  serviceName?: string;
  /** Initial data */
  data?: R;
}

interface UseAuthCallback<R> {
  (authData: unknown): Promise<R>;
}

export function useAuth<R>(
  callback: UseAuthCallback<R>,
  options: UseAuthOptions<R> = {},
  deps = []
) {
  const context = useMemo(() => getServiceAuthContext(options.serviceName), [
    options.serviceName,
  ]);
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
  }, [authData]);

  const fetch = async () => {
    setLoading(true);
    setData(null);
    handleReauth();
  };

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

  useEffect(() => {
    if (!deps || deps.length === 0) return;
    // Although authed is checked, its not a dep because this should not be run
    // if it changes
    if (authed) getData();
  }, deps);

  return { data, error, authed, loading, fetch };
}
