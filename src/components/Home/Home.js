import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFeed, fetchUsers } from '../../features/cardSlice';
import Feed from '../Feed/Feed';

const Home = () => {
	const dispatch = useDispatch();
	//Carrega todos os usuários e o feed do usuário selecionado
	useEffect(() => {
		dispatch(fetchFeed());
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div>
			<Feed />
		</div>
	);
};

export default Home;
