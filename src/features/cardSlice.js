import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users/1/posts';

export const fetchFeed = createAsyncThunk('posts/fetchFeed', async () => {
	const response = await axios.get(url);
	return response.data;
});

const initialState = {
	posts: {},
	selectedPost: {},
};

const cardSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchFeed.pending]: () => {
			console.log('Pendiiiing');
		},
		[fetchFeed.rejected]: () => {
			console.log('Rejected ):');
		},
		[fetchFeed.fulfilled]: (state, { payload }) => {
			console.log('Fetched!!');
			return { ...state, posts: payload };
		},
	},
});

export default cardSlice.reducer;
export const getAllFeed = (state) => state.posts;
