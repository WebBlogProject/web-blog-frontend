import { createSlice } from '@reduxjs/toolkit';
import { HomePageState, INITIAL_PAGE } from '../../types/PageState';

const initialState: HomePageState = {
  nextPage: INITIAL_PAGE,
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
        isSuccess: false,
        isError: true,
      };
    },
  },
});

export { homeSlice };
export const { postHeaderPageLoad, postHeaderPageLoadFail } = homeSlice.actions;
