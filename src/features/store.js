import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';

const store = configureStore({
	reducer: {
		phState: cardReducer,
	},
});

export default store;
