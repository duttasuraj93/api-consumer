import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../store'

interface MovieState {
  movies: [],
	page: number,
	hasMoreMovies: boolean
}

const initialState: MovieState = {
  movies: [],
	page: 1,
	hasMoreMovies: true
}

export const movieSlice = createSlice({
	name: 'MOVIES',
	initialState: initialState,
	reducers: {
		addMovies: (state, action: PayloadAction<[]>) => {
			state.movies.push(...action.payload)
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		hasMoreMovies: (state, action: PayloadAction<boolean>) => {
			state.hasMoreMovies = action.payload
		},
	},
})

export const { addMovies, setPage, hasMoreMovies } = movieSlice.actions

export const selectCount = (state: RootState) => state.movies

export default movieSlice.reducer