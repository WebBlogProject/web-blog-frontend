import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/dist/query';
import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { PostHeaderPage } from '../../../application/types/PostHeaderPage';
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
      PostHeaderPage
    >
  >,
  action: ActionCreatorWithPayload<any, any>
) => {
  const data = useAppSelector((state) => state.home);

  const [pageNumber, setPageNumber] = useState(data.pageNumber);
  const currentResult = usePageQuery(pageNumber);
  const isSuccess = currentResult.isSuccess;
  const isError = currentResult.isError;
  const dispatch = useAppDispatch();
  const hasDuplicatePage = useCallback(
    (postHeaderDTO: PostHeaderDTO) => {
      if (data.posts.length === 0) return false;
      else {
        return data.posts.at(-1)?.id === postHeaderDTO.nextPosts.at(-1)?.id;
      }
    },
    [data]
  );

  const ref = useIntersect(async (entry, observer) => {
    if (isSuccess && currentResult.data.hasNextPage) {
      setPageNumber(currentResult.data.nextPage);
    }
  });

  useEffect(() => {
    if (currentResult.isSuccess && !hasDuplicatePage(currentResult.data)) {
      dispatch(
        action({
          pageNumber: pageNumber,
          posts: currentResult.data.nextPosts,
        })
      );
    }
  }, [currentResult, action, pageNumber, dispatch, hasDuplicatePage]);

  return { data, isSuccess, isError, ref };
};

export { useFetchPages };
