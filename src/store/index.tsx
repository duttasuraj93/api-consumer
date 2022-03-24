import { configureStore } from '@reduxjs/toolkit'
import theme from '../redux/reducers/theme/index';
import movies from '../redux/reducers/movies/index';

export const store = configureStore({
  reducer: {
    theme,
	movies
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch