import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed, fetchUsers, getPost } from '../../features/cardSlice';
import Feed from '../Feed/Feed';

const Home = () => {
	const dispatch = useDispatch();
	//Carrega todos os usuários e o feed do usuário selecionado
	useEffect(() => {
		dispatch(fetchFeed());
		dispatch(fetchUsers());
	}, []);

	return (
		<div>
			<Feed />
		</div>
	);
};

export default Home;
