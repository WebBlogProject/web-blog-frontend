import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseLazyQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useEffect } from 'react';
import { PostHeaderPage } from '../../../application/types/PostHeaderPage';
import { useAppDispatch } from './reduxHooks';
import { useIntersect } from './useIntersect';

const useFetchPages = <T>(
  usePageQuery: UseLazyQuery<
    QueryDefinition<
      T,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      never,
      PostHeaderPage
    >
  >,
  onLoadSuccess: ActionCreatorWithPayload<any, any>,
  onLoadFail: ActionCreatorWithPayload<any, any>,
  getFetchArg: (nextPageKey: number | null) => T | null,
  nextPage: number | null
) => {
  const [trigger, currentResult] = usePageQuery();
  const dispatch = useAppDispatch();

  const hasNextPage = nextPage !== null;
  const nextPageId = nextPage;

  const ref = useIntersect(async (entry, observer) => {
    const fetchArg = getFetchArg(nextPageId)
    if (hasNextPage && !currentResult.isFetching && fetchArg != null) {
      trigger(fetchArg);
    }
  });

  useEffect(() => {
    const { currentData, isSuccess, isError, isFetching } = currentResult;
    if (isSuccess && !isFetching) {
      dispatch(
        onLoadSuccess({
          nextPage: currentData.hasNextPage ? currentData.nextPage : null,
          posts: currentData.nextPosts,
          isSuccess: true,
          isError: false,
        })
      );
    } else if (isError) {
      dispatch(onLoadFail);
    }
  }, [currentResult, onLoadSuccess, onLoadFail, dispatch]);

  return ref;
};

export { useFetchPages };
