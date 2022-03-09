import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPhotos, selectPhotos } from '../../features/photoSlice';
import './Photos.css';

const Photos = (props) => {
	const prop = props;
	const allPhotos = useSelector(getAllPhotos);
	const dispatch = useDispatch();
	// console.log(allComments);

	const photosFromSpecificAlbum = allPhotos.filter(function (el) {
		return el.albumId === prop.albumId;
	});

	dispatch(selectPhotos(photosFromSpecificAlbum));

	const mapPhotos = photosFromSpecificAlbum.map((el, i) => {
		return (
			<Link key={el?.id} to={`/photos/:${el?.albumId}`}>
				<img
					key={el?.id}
					className='photo'
					alt={el?.title}
					src={el?.thumbnailUrl}
				/>
			</Link>
		);
	});

	return (
		<div key={prop.albumId} className='photos'>
			{mapPhotos}
		</div>
	);
};

export default Photos;
