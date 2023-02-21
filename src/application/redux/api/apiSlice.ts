import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../types/Post';
import { PostHeaderDTO } from '../../types/PostHeaderDTO';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/mock',
  }),
  endpoints: (builder) => ({
    getPostHeaders: builder.query<PostHeaderDTO, number>({
      query: (pageNumber: number) => `/postHeaders/${pageNumber}.json`,
    }),
    getPostById: builder.query<Post, number>({
      query: (id: number) => `/post/${id}.json`,
    }),
  }),
});

export { apiSlice };
export const { useGetPostHeadersQuery, useGetPostByIdQuery } = apiSlice;
