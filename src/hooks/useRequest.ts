import { useState, useCallback } from "react";

type AsyncState<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
  success: boolean;
};

function useRequest<T, Args extends unknown[]>(
  asyncFunction: (...args: Args) => Promise<T>
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: false,
    success: false,
  });

  const run = useCallback(
    async (...args: Args) => {
      setState({ data: null, loading: true, error: null, success: false });

      try {
        const response = await asyncFunction(...args);

        setState({
          data: response,
          loading: false,
          error: null,
          success: true,
        });

        return response;
      } catch (err) {
        setState({
          data: null,
          error: err as Error,
          loading: false,
          success: false,
        });

        throw err;
      }
    },
    [asyncFunction]
  );

  return { ...state, run };
}

export default useRequest;
