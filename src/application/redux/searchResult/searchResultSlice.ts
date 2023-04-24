import { createSlice } from '@reduxjs/toolkit';
import { PageState } from '../../types/PageState';

const initialState: PageState = {
  nextPage: 1,
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
        nextPage: 0,
        isSuccess: false,
        isError: true,
      };
    },
    resetSearchPostHeader: (state, action) => {
      return {
        nextPage: 1,
        posts: [],
        isSuccess: false,
        isError: false,
      };
    }
  }
});

export { searchResultSlice };
export const { searchPostHeaderPageLoad, searchPostHeaderPageLoadFail, resetSearchPostHeader } = searchResultSlice.actions;