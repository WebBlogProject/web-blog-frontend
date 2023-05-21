import { createSlice } from '@reduxjs/toolkit';
import {
  SearchPageState,
  LoadStateConst,
  INITIAL_PAGE,
} from '../../types/PageState';

const initialState: SearchPageState = {
  pageState: {
    nextPage: INITIAL_PAGE,
    posts: [],
    refreshState: LoadStateConst.None,
    appendState: LoadStateConst.None,
  },
  query: '',
};

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    // TODO: Replace to right param and return value

    searchPostHeaderPageLoad: (state, action) => {
      const { nextPage, posts, isSuccess, isError } = action.payload;
      return {
        ...state,
        pageState: {
          nextPage: nextPage,
          posts: [...state.pageState.posts, ...posts],
          refreshState: LoadStateConst.Complete,
          appendState: LoadStateConst.Complete,
        },
      };
    },
    searchPostHeaderPageLoadFail: (state, action) => {
      return {
        ...state,
        pageState: {
          ...state.pageState,
          isSuccess: false,
          isError: true,
        },
      };
    },
    resetSearchPostHeader: (state, action) => {
      const { query } = action.payload;
      return {
        ...initialState,
        query: query,
      };
    },
  },
});

export { searchResultSlice };
export const {
  searchPostHeaderPageLoad,
  searchPostHeaderPageLoadFail,
  resetSearchPostHeader,
} = searchResultSlice.actions;
