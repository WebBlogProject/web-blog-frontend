import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostHeaderData } from '../../types/PostHeaderData';

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/mock',
  }),
  endpoints: (builder) => ({
    getPostHeaders: builder.query<PostHeaderData[], void>({
      query: () => '/postHeaders.json',
    }),
  }),
});

export { apiSlice };
export const { useGetPostHeadersQuery } = apiSlice;
