import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

//pega todos os posts
export const fetchAlbums = createAsyncThunk(
	'photoState/fetchAlbums',
	async () => {
		const response = await axios.get(url + `/albums`);
		return response.data;
	}
);

//pega todos os usuarios
export const fetchUsers = createAsyncThunk(
	'photoState/fetchUsers',
	async () => {
		const response = await axios.get(url + `/users`);
		return response.data;
	}
);

// //pega os comentarios de determinado post
// export const fetchComments = createAsyncThunk(
// 	'photoState/fetchComments',
// 	async (postId) => {
// 		const response = await axios.get(url + `/comments?postId=${postId}`);
// 		return response.data;
// 	}
// );

//pega todas as fotos
export const fetchAllPhotos = createAsyncThunk(
	'photoState/fetchAllPhotos',
	async () => {
		const response = await axios.get(url + `/photos`);
		return response.data;
	}
);

const initialState = {
	albums: {},
	users: {},
	allPhotos: {},
	selectedAlbum: {},
	selectedPhotos: {},
};

const photoSlice = createSlice({
	name: 'photoState',
	initialState,
	reducers: {
		selectAlbum: (state, { payload }) => {
			state.selectedAlbum = payload;
		},
		selectPhotos: (state, { payload }) => {
			state.selectedPhotos = payload;
		},
	},
	extraReducers: {
		[fetchAlbums.pending]: () => {
			console.log('Pendiiiiing all albums');
		},
		[fetchAlbums.rejected]: () => {
			console.log('Rejected ):');
		},
		[fetchAlbums.fulfilled]: (state, { payload }) => {
			console.log('Fetched all albums!!');
			return { ...state, albums: payload };
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
		// [fetchComments.pending]: () => {
		// 	console.log('Pendiiiiing Comments');
		// },
		// [fetchComments.rejected]: () => {
		// 	console.log('Rejected ):');
		// },
		// [fetchComments.fulfilled]: (state, { payload }) => {
		// 	console.log('Fetched Comments!!');
		// 	return { ...state, comments: payload };
		// },
		[fetchAllPhotos.pending]: () => {
			console.log('Pendiiiiing Photos');
		},
		[fetchAllPhotos.rejected]: () => {
			console.log('Rejected ):');
		},
		[fetchAllPhotos.fulfilled]: (state, { payload }) => {
			console.log('Fetched All Photos!!');
			return { ...state, allPhotos: payload };
		},
	},
});

export default photoSlice.reducer;
export const { selectAlbum, selectPhotos } = photoSlice.actions;
export const getUsers = (state) => state.photoState.users;
export const getAllPhotos = (state) => state.photoState.allPhotos;
export const getAlbums = (state) => state.photoState.albums;
export const getSelectedPhotos = (state) => state.photoState.selectedPhotos;
