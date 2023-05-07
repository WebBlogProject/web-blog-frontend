import { createSlice } from '@reduxjs/toolkit';
import { PageState, INITIAL_PAGE } from '../../types/PageState';

const initialState: PageState = {
  nextPage: INITIAL_PAGE,
  posts: [],
  isSuccess: false,
  isError: false,
};

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    searchPostHeaderPageLoad: (state, action) => {
      const { nextPage, posts, isSuccess, isError } = action.payload;
      return {
        ...state,
        nextPage: nextPage,
        posts: [...state.posts, ...posts],
        isSuccess: isSuccess,
        isError: isError,
      };
    },
    searchPostHeaderPageLoadFail: (state, action) => {
      return {
        ...state,
        isSuccess: false,
        isError: true,
      };
    },
    resetSearchPostHeader: (state, action) => {
      return initialState;
    }
  }
});

export { searchResultSlice };
export const { searchPostHeaderPageLoad, searchPostHeaderPageLoadFail, resetSearchPostHeader } = searchResultSlice.actions;