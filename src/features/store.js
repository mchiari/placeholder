import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import photoReducer from './photoSlice';

const store = configureStore({
	reducer: {
		postsState: cardReducer,
		photoState: photoReducer,
	},
});

export default store;
