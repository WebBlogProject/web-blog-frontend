import { createSlice } from '@reduxjs/toolkit';
import {
  PageState,
  LoadStateConst,
  INITIAL_PAGE,
  createPageStateForLoadState,
} from '../../types/PageState';

const initialState: PageState = {
  nextPage: INITIAL_PAGE,
  posts: [],
  refreshState: LoadStateConst.None,
  appendState: LoadStateConst.None,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    postHeaderPageLoadComplete: (state, action) => {
      const { nextPage, posts } = action.payload;
      return {
        ...createPageStateForLoadState(state, LoadStateConst.Complete),
        nextPage: nextPage,
        posts: [...state.posts, ...posts],
      };
    },
    postHeaderPageLoadFail: (state, _) => {
      return createPageStateForLoadState(state, LoadStateConst.Error);
    },
    postHeaderPageLoading: (state, _) => {
      return createPageStateForLoadState(state, LoadStateConst.Loading);
    },
  },
});

export { homeSlice };
export const {
  postHeaderPageLoadComplete,
  postHeaderPageLoadFail,
  postHeaderPageLoading,
} = homeSlice.actions;
