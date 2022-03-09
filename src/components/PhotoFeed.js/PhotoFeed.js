import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUsers } from '../../features/photoSlice';
import {
	fetchAlbums,
	fetchAllPhotos,
	getAlbums,
} from '../../features/photoSlice';
import PhotoCard from '../PhotoCard/PhotoCard';
import './PhotoFeed.css';

const PhotoFeed = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAlbums());
		dispatch(fetchUsers());
		dispatch(fetchAllPhotos());
	}, [dispatch]);

	const albums = useSelector(getAlbums);
	const users = useSelector(getUsers);

	// console.log(albums);
	// console.log(photos);
	// console.log(users);

	//Joga o feed em um array para que seja percorrido pelo map na hora de renderizar
	const albumsArray = [];
	for (let index = 0; index < albums?.length; index++) {
		// console.log(feed?.[index]);
		albumsArray.push(albums?.[index]);
	}

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	shuffleArray(albumsArray);

	return (
		<div className='feed-wrapper'>
			<div className='feed-container'>
				<div className='feed-title'>
					<h2>Photo Feed</h2>
				</div>
				{albumsArray.map((albums, index) => {
					return (
						<PhotoCard
							key={index}
							photoId={index}
							feed={albums}
							users={users}
						/>
					);
				})}
				testando
			</div>
		</div>
	);
};

export default PhotoFeed;
