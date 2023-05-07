import { createSlice } from '@reduxjs/toolkit';
import { SearchPageState, INITIAL_PAGE } from '../../types/PageState';

const initialState: SearchPageState = {
  nextPage: INITIAL_PAGE,
  posts: [],
  isSuccess: false,
  isError: false,
  query: "",
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
      const { query } = action.payload;
      return {
        nextPage: INITIAL_PAGE,
        posts: [],
        isSuccess: false,
        isError: false,
        query: query,
      };
    }
  }
});

export { searchResultSlice };
export const { searchPostHeaderPageLoad, searchPostHeaderPageLoadFail, resetSearchPostHeader } = searchResultSlice.actions;