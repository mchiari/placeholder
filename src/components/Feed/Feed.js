import React from 'react';
import { useSelector } from 'react-redux';
import { getAllFeed, getUsers, setUsers } from '../../features/cardSlice';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import './Feed.css';

const Feed = () => {
	const posts = useSelector(getAllFeed);
	const users = useSelector(getUsers);
	// setUsers(users);

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

	return (
		<div className='feed-wrapper'>
			<div className='searchbar'>{/* <SearchBar users={users} /> */}</div>
			<div className='feed-container'>
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
