import { createSlice } from '@reduxjs/toolkit';
import { PageState, LoadStateConst, INITIAL_PAGE } from '../../types/PageState';

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
    // TODO: Replace to right param and return value

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
