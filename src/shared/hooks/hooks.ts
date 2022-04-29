import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  deafultPage?: number | undefined;
  deafultPageSize?: number | undefined;
};

export type OnChaneParams = {
  page?: number;
  pageSize?: number;
};
/**
 * @param {number} deafultPage  - Default page to render.
 * @returns {[number,Function]} - State tuple.
 */
export function usePagination({
  deafultPage = 1,
  deafultPageSize = 10,
}: Props = {}): [
  { page: number; pageSize: number },
  (n: OnChaneParams) => void,
] {
  const location = useLocation();
  const navigate = useNavigate();

  const [page, setPage] = useState(() => {
    const query = new URLSearchParams(location.search);
    const currentPage = query.get('page')
      ? Number(query.get('page'))
      : deafultPage;
    const currentPageSize = query.get('pageSize')
      ? Number(query.get('pageSize'))
      : deafultPageSize;

    return {
      page: currentPage,
      pageSize: currentPageSize,
    };
  });

  /**
   * @param value - Params.
   */
  const onChange = (value: OnChaneParams): void => {
    const query = new URLSearchParams(location.search);
    if (value.page) {
      query.set('page', value.page.toString());
    }
    if (value.pageSize) {
      query.set('pageSize', value.pageSize.toString());
    }

    const push = {
      pathname: location.pathname,
      search: query.toString(),
    };
    navigate(push);

    setPage((prev) => ({ ...prev, ...value }));
  };
  return [page, onChange];
}

interface UrlParamsValues {
  key: string;
  value: string | null | undefined;
}

interface UseUrlParamsReturn {
  setUrlFilterParams: (
    params: UrlParamsValues | Array<UrlParamsValues>,
  ) => void;
  clearSpecificUrlParams: (keys: string | Array<string>) => void;
  query: URLSearchParams;
}

/**
 * @returns {Function} - Callback.
 */
export function useUrlParams(): UseUrlParamsReturn {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  /**
   * @description - Set url params.
   * @param {UrlParamsValues | Array<UrlParamsValues>} params - Params.
   * @returns {void} - Nothing.
   */
  const setUrlFilterParams = (
    params: UrlParamsValues | Array<UrlParamsValues>,
  ): void => {
    if (Array.isArray(params)) {
      params.forEach((param) => {
        if (param.value) {
          query.set(param.key, param.value);
        } else {
          query.delete(param.key);
        }
      });
    }

    if (!Array.isArray(params)) {
      if (params.value) {
        query.set(params.key, params.value);
      } else {
        query.delete(params.key);
      }
    }

    const push = {
      pathname: location.pathname,
      search: query.toString(),
    };

    navigate(push);
  };

  /**
   * @description - Clear specific url params.
   * @param {string | Array<string>} keys - Params.
   * @returns {void} - Nothing.
   */
  const clearSpecificUrlParams = (keys: string | Array<string>): void => {
    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        query.delete(key);
      });
    }

    if (!Array.isArray(keys)) {
      query.delete(keys);
    }

    const push = {
      pathname: location.pathname,
      search: query.toString(),
    };

    navigate(push);
  };

  return {
    setUrlFilterParams,
    clearSpecificUrlParams,
    query,
  };
}
