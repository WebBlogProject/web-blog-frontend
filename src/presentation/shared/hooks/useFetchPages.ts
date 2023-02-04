import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useMemo, useState } from 'react';
import { PostHeaderData } from '../../../application/types/PostHeaderData';

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
  >,
  currentPage: number
) => {
  const [data, setData] = useState<PostHeaderData[]>([]);
  const currentResult = usePageQuery(currentPage);
  const nextResult = usePageQuery(currentPage + 1); //Used for next page Existance , Might Change implementation when backend server api is fully implemented.
  const isSuccess = currentResult.isSuccess;
  const isLoading = currentResult.isLoading;
  const isError = currentResult.isError;
  const hasNextResult = !nextResult.isError;

  useMemo(() => {
    if (isSuccess) setData((data) => [...data].concat(...currentResult.data));
  }, [isSuccess, currentResult]);

  return { data, isSuccess, isLoading, isError, hasNextResult };
};

export { useFetchPages };
