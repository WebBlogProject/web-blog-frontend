import { createSlice } from '@reduxjs/toolkit';
import { PageState } from '../../types/PageState';

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
        ...state,
        nextPage: nextPage,
        posts: [...state.posts, ...posts],
        isSuccess: isSuccess,
        isError: isError,
      };
    },
    postHeaderPageLoadFail: (state, action) => {
      return {
        ...state,
        nextPage: 0,
        isSuccess: false,
        isError: true,
      };
    },
  },
});

export { homeSlice };
export const { postHeaderPageLoad, postHeaderPageLoadFail } = homeSlice.actions;
