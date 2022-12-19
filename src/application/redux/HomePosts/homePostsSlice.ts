import { createSlice } from '@reduxjs/toolkit';
import { simplePostType } from '../../types/simplePostType';
import { RootState } from '../store';

//temporary initial state
const initialState: simplePostType[] = [
  {
    id: 1,
    title: 'searchResultPost',
    creationDate: Date.now(),
    estimateTimedToRead: 20,
    thumbnailUrl: '',
    tagList: [
      {
        tagId: 1,
        tagName: 'test1',
      },
    ],
  },
];

const blogHomePostsSlice = createSlice({
  name: 'blog_home_posts',
  initialState,
  reducers: {},
});

export const selectPosts = (state: RootState) => state.blogHomePosts;
export default blogHomePostsSlice.reducer;
