import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/Post';
import { RootState } from '../store';

//temporary initial state
const initialState: Post[] = [
  {
    id: 1,
    title: 'searchResultPost',
    creationDate: Date.now(),
    estimatedTimeToRead: 20,
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
