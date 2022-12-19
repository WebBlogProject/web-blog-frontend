import { createSlice } from '@reduxjs/toolkit';
import { simplePostType } from '../../types/simplePostType';

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

const blogSearchResultPostsSlice = createSlice({
  name: 'blog_search_result_posts',
  initialState,
  reducers: {},
});

export default blogSearchResultPostsSlice.reducer;
