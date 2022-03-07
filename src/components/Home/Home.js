import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed, getAllFeed } from '../../features/cardSlice';
import Feed from '../Feed/Feed';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchFeed());
	}, [dispatch]);

	return (
		<div>
			<Feed />
		</div>
	);
};

export default Home;
