import { configureStore } from '@reduxjs/toolkit';

import blogHomePostsReducer from './HomePosts/homePostsSlice';
import blogSearchResultsPostsReducer from './SearchResultPosts/searchResultPostsSlice';

const store = configureStore({
  reducer: {
    blogHomePosts: blogHomePostsReducer,
    blogSearchResultPosts: blogSearchResultsPostsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
