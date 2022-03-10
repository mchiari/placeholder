import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchAllComments,
	fetchFeed,
	fetchUsers,
	getAllFeed,
	getUsers,
} from '../../features/cardSlice';
import Card from '../Card/Card';
import './Feed.css';

const Feed = () => {
	const dispatch = useDispatch();
	//Carrega todos os usuários e o feed do usuário selecionado
	useEffect(() => {
		dispatch(fetchFeed());
		dispatch(fetchUsers());
		dispatch(fetchAllComments());
	}, [dispatch]);

	const posts = useSelector(getAllFeed);
	const users = useSelector(getUsers);

	//Joga o feed em um array para que seja percorrido pelo map na hora de renderizar
	const postsArray = [];
	for (let index = 0; index < posts?.length; index++) {
		// console.log(feed?.[index]);
		postsArray.push(posts?.[index]);
	}

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	shuffleArray(postsArray);

	return (
		<div className='feed-wrapper'>
			<div className='feed-container'>
				<div className='feed-title'>
					<h2>Feed</h2>
				</div>
				{/* Renderiza um card para cada post do usuário  */}
				{postsArray.map((post, index) => {
					return (
						<Card
							key={index}
							cardId={index}
							feed={post}
							users={users}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Feed;
