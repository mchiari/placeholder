// import axios from 'axios';

// export const getFeed = () => {
// 	const baseUrl = 'https://jsonplaceholder.typicode.com/users/1/posts';
// 	const response = axios.get(baseUrl).then((response) => {
// 		// console.log(response.data);
// 	});
// 	return response;
// };

// export default getFeed;

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const url = 'https://jsonplaceholder.typicode.com/users/1/posts';

// export const fetchFeed = createAsyncThunk('posts/fetchFeed', async () => {
// 	const response = await axios.get(url).then((response) => {
// 		console.log(response.data);
// 	});
// 	return response.data;
// });
