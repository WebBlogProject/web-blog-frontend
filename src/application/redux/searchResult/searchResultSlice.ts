import { createSlice } from '@reduxjs/toolkit';
import {
  SearchPageState,
  LoadStateConst,
  INITIAL_PAGE,
  createPageStateForLoadState,
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
    searchPostHeaderPageLoadComplete: (state, action) => {
      const { nextPage, posts } = action.payload;
      return {
        ...state,
        pageState: {
          ...createPageStateForLoadState(
            state.pageState,
            LoadStateConst.Complete
          ),
          nextPage: nextPage,
          posts: [...state.pageState.posts, ...posts],
        },
      };
    },
    searchPostHeaderPageLoadFail: (state, _) => {
      return {
        ...state,
        pageState: createPageStateForLoadState(
          state.pageState,
          LoadStateConst.Error
        ),
      };
    },
    searchPostHeaderPageLoading: (state, _) => {
      return {
        ...state,
        pageState: createPageStateForLoadState(
          state.pageState,
          LoadStateConst.Loading
        ),
      };
    },
    resetSearchPostHeader: (_, action) => {
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
  searchPostHeaderPageLoadComplete,
  searchPostHeaderPageLoadFail,
  searchPostHeaderPageLoading,
  resetSearchPostHeader,
} = searchResultSlice.actions;
