import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

//pega todos os posts
export const fetchFeed = createAsyncThunk('phState/fetchFeed', async () => {
	const response = await axios.get(url + `/posts`);
	return response.data;
});

//pega todos os usuarios
export const fetchUsers = createAsyncThunk('phState/fetchUsers', async () => {
	const response = await axios.get(url + `/users`);
	return response.data;
});

//pega os comentarios de determinado post
export const fetchComments = createAsyncThunk(
	'phState/fetchComments',
	async (postId) => {
		const response = await axios.get(url + `/comments?postId=${postId}`);
		return response.data;
	}
);

//pega todos os comentarios
export const fetchAllComments = createAsyncThunk(
	'phState/fetchAllComments',
	async () => {
		const response = await axios.get(url + `/comments`);
		return response.data;
	}
);

const initialState = {
	posts: {},
	users: {},
	comments: {},
	allComments: {},
	selectedUser: {},
	selectedPost: {},
};

const cardSlice = createSlice({
	name: 'postsState',
	initialState,
	reducers: {
		selectPost: (state, { payload }) => {
			state.selectedPost = payload;
		},
		selectComments: (state, { payload }) => {
			state.comments = payload;
		},
	},
	extraReducers: {
		[fetchFeed.pending]: () => {
			console.log('Pendiiiiing all posts');
		},
		[fetchFeed.rejected]: () => {
			console.log('Rejected ):');
		},
		[fetchFeed.fulfilled]: (state, { payload }) => {
			console.log('Fetched all posts!!');
			return { ...state, posts: payload };
		},
		[fetchUsers.pending]: () => {
			console.log('Pendiiiiing users');
		},
		[fetchUsers.rejected]: () => {
			console.log('Rejected ):');
		},
		[fetchUsers.fulfilled]: (state, { payload }) => {
			console.log('Fetched users!!');
			return { ...state, users: payload };
		},
		[fetchComments.pending]: () => {
			console.log('Pendiiiiing Comments');
		},
		[fetchComments.rejected]: () => {
			console.log('Rejected ):');
		},
		[fetchComments.fulfilled]: (state, { payload }) => {
			console.log('Fetched Comments!!');
			return { ...state, comments: payload };
		},
		[fetchAllComments.pending]: () => {
			console.log('Pendiiiiing Comments');
		},
		[fetchAllComments.rejected]: () => {
			console.log('Rejected ):');
		},
		[fetchAllComments.fulfilled]: (state, { payload }) => {
			console.log('Fetched All Comments!!');
			return { ...state, allComments: payload };
		},
	},
});

export default cardSlice.reducer;
export const { selectPost, selectComments } = cardSlice.actions;
export const getAllFeed = (state) => state.postsState.posts;
export const getUsers = (state) => state.postsState.users;
export const getComments = (state) => state.postsState.comments;
export const getAllComments = (state) => state.postsState.allComments;
export const getPost = (state) => state.postsState.selectedPost;
