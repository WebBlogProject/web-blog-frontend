import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../types/Post';
import { PostHeaderPage } from '../../types/PostHeaderPage';
import { SearchQueryArgs } from '../../types/SearchQueryArgs';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/mock',
  }),
  endpoints: (builder) => ({
    getPostHeaders: builder.query<PostHeaderPage, number>({
      query: (pageNumber: number) => `/postHeaders/${pageNumber}.json`,
    }),
    getPostById: builder.query<Post, number>({
      query: (id: number) => `/post/${id}.json`,
    }),
    getPostHeadersByKeyword: builder.query<PostHeaderPage, SearchQueryArgs>({
      query: (arg: SearchQueryArgs) => `/query/${arg.keyword}/${arg.pageId}.json`,
    }),
  }),
});

export { apiSlice };
export const {
  useLazyGetPostHeadersQuery,
  useGetPostByIdQuery,
  useLazyGetPostHeadersByKeywordQuery,
} = apiSlice;
