import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
	fetchAllComments,
	fetchFeed,
	fetchUsers,
} from '../../features/cardSlice';
import Feed from '../Feed/Feed';
import './Home.css';

const Home = () => {
	const dispatch = useDispatch();
	//Carrega todos os usuários e o feed do usuário selecionado
	useEffect(() => {
		dispatch(fetchFeed());
		dispatch(fetchUsers());
		dispatch(fetchAllComments());
	}, [dispatch]);

	return (
		<div className='all-wrapper'>
			<Feed />
		</div>
	);
};

export default Home;
