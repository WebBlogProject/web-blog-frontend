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
import { PostHeaderDTO } from '../../../application/types/PostHeaderDTO';
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
      PostHeaderDTO
    >
  >,
  initialPage: number
) => {
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [data, setData] = useState<PostHeaderData[]>([]);
  const currentResult = usePageQuery(pageNumber);
  const isSuccess = currentResult.isSuccess;
  const isError = currentResult.isError;

  useMemo(() => {
    if (currentResult.isSuccess && !currentResult.isFetching)
      setData((data) => [...data].concat(...currentResult.data.nextPosts));
  }, [currentResult]);

  const ref = useIntersect(async (entry, observer) => {
    if (isSuccess && currentResult.data.hasNextPage) {
      setPageNumber(currentResult.data.nextPage);
    }
  });

  return { data, isSuccess, isError, ref };
};

export { useFetchPages };
