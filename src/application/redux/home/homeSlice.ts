import { createSlice } from '@reduxjs/toolkit';
import { PostHeaderData } from '../../types/PostHeaderData';

type PageState = {
  nextPage: number;
  posts: PostHeaderData[];
  isSuccess: boolean;
  isError: boolean;
};

const initialState: PageState = {
  nextPage: 1,
  posts: [],
  isSuccess: false,
  isError: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    postHeaderPageLoad: (state, action) => {
      const { nextPage, posts, isSuccess, isError } = action.payload;
      return {
        nextPage: nextPage,
        posts: [...state.posts, ...posts],
        isSuccess: isSuccess,
        isError: isError,
      };
    },
    postHeaderPageLoadFail: (state, action) => {
      return {
        ...state,
        isSuccess: false,
        isError: true,
      };
    },
  },
});

export { homeSlice };
export const { postHeaderPageLoad, postHeaderPageLoadFail } = homeSlice.actions;
export type { PageState };
