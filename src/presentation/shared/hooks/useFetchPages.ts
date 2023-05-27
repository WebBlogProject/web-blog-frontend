import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseLazyQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useCallback, useEffect, useState } from 'react';
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
  onLoadFail: ActionCreatorWithoutPayload<any>,
  onLoading: ActionCreatorWithoutPayload<any>,
  getFetchArg: (nextPageKey: number | null) => T | null,
  nextPage: number | null
) => {
  const [trigger, currentResult] = usePageQuery();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const dispatch = useAppDispatch();

  const hasNextPage = nextPage !== null;
  const nextPageId = nextPage;

  const ref = useIntersect(async (entry, observer) => {
    const isEntryIntersecting = entry.isIntersecting;

    // To prevent calling fetch infinitely, we need to check that intersecting state is changed or not.
    // We need to try new fetch at error or loading case
    // only when intersecting state is changed (invisible to visible).
    if (!currentResult.isSuccess && isIntersecting === isEntryIntersecting) {
      return;
    }

    setIsIntersecting(isEntryIntersecting);
    if (!isEntryIntersecting) {
      return;
    }

    const fetchArg = getFetchArg(nextPageId);
    if (hasNextPage && !currentResult.isFetching && fetchArg != null) {
      trigger(fetchArg, true);
      dispatch(onLoading());
    }
  });

  useEffect(() => {
    const { currentData, isSuccess, isError, isFetching } = currentResult;
    if (isSuccess && !isFetching) {
      dispatch(
        onLoadSuccess({
          nextPage: currentData.hasNextPage ? currentData.nextPage : null,
          posts: currentData.nextPosts,
        })
      );
    } else if (isError) {
      dispatch(onLoadFail());
    }
  }, [currentResult, onLoadSuccess, onLoadFail, dispatch]);

  const resetIntersectingState = useCallback(() => {
    setIsIntersecting(false);
  }, [setIsIntersecting]);

  return { ref, resetIntersectingState };
};

export { useFetchPages };
