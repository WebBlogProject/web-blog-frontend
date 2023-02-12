import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useCallback, useMemo, useState } from 'react';
import { PostHeaderData } from '../../../application/types/PostHeaderData';
import { useIntersect } from './useIntersect';

const useFetchPages = (
  usePageQuery: UseQuery<
    QueryDefinition<
      number,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      PostHeaderData[]
    >
  >
) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState<PostHeaderData[]>([]);
  const currentResult = usePageQuery(pageNumber);
  const nextResult = usePageQuery(pageNumber + 1);
  const isSuccess = currentResult.isSuccess;
  const isLoading = currentResult.isLoading;
  const isError = currentResult.isError;
  const hasNextResult = !nextResult.isError;

  useMemo(() => {
    if (isSuccess) setData((data) => [...data].concat(...currentResult.data));
  }, [isSuccess, currentResult]);

  const ref = useIntersect(
    useCallback(
      async (entry, observer) => {
        if (hasNextResult && !isLoading) setPageNumber(pageNumber + 1);
      },
      [hasNextResult, isLoading, pageNumber]
    )
  );

  return { data, isSuccess, isLoading, isError, ref, hasNextResult };
};

export { useFetchPages };
