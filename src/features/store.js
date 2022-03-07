import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';

const store = configureStore({
	reducer: {
		posts: cardReducer,
	},
});

export default store;
