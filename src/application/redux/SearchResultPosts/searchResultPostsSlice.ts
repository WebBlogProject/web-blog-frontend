import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/Post';

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

const blogSearchResultPostsSlice = createSlice({
  name: 'blog_search_result_posts',
  initialState,
  reducers: {},
});

// export default blogSearchResultPostsSlice.reducer;
export default blogSearchResultPostsSlice.reducer;
