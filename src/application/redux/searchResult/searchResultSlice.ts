import { createSlice } from '@reduxjs/toolkit';
import { SearchPageState, INITIAL_PAGE } from '../../types/PageState';

const initialState: SearchPageState = {
  pageState: {
    nextPage: INITIAL_PAGE,
    posts: [],
    isSuccess: false,
    isError: false,
  },
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
        pageState: {
          nextPage: nextPage,
          posts: [...state.pageState.posts, ...posts],
          isSuccess: isSuccess,
          isError: isError,
        }
      };
    },
    searchPostHeaderPageLoadFail: (state, action) => {
      return {
        ...state,
        pageState: {
          ...state.pageState,
          isSuccess: false,
          isError: true,
        }
      };
    },
    resetSearchPostHeader: (state, action) => {
      const { query } = action.payload;
      return {
        ...initialState,
        query: query,
      };
    }
  }
});

export { searchResultSlice };
export const { searchPostHeaderPageLoad, searchPostHeaderPageLoadFail, resetSearchPostHeader } = searchResultSlice.actions;