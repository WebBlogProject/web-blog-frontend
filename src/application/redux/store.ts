import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './api/apiSlice';
import { homeSlice } from './home/homeSlice';

const store = configureStore({
  reducer: {
    [homeSlice.name]: homeSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
