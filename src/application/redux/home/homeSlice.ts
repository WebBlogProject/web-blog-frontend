import { createSlice } from '@reduxjs/toolkit';
import { PostHeaderData } from '../../types/PostHeaderData';

type PageState = {
  pageNumber: number;
  posts: PostHeaderData[];
};

const initialState: PageState = {
  pageNumber: 1,
  posts: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    loadPostHeaderPage: (state, action) => {
      const { pageNumber, posts } = action.payload;
      return {
        pageNumber: pageNumber,
        posts: [...state.posts, ...posts],
      };
    },
  },
});

export { homeSlice };
export const { loadPostHeaderPage } = homeSlice.actions;
