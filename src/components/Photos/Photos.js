import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPhotos } from '../../features/photoSlice';
import './Photos.css';

const Photos = (props) => {
	const prop = props;
	const allPhotos = useSelector(getAllPhotos);
	// console.log(allComments);

	const fivePhotos = allPhotos.filter(function (el) {
		return el.albumId === prop.albumId;
	});

	// console.log(fiveComments);

	const mapPhotos = fivePhotos.map((el, i) => {
		return (
			<Link key={i} to={`/photos/:${el?.albumId}`}>
				<img
					key={i}
					className='photo'
					alt={el?.title}
					src={el?.thumbnailUrl}
				/>
			</Link>
		);
	});

	return <div className='photos'>{mapPhotos}</div>;
};

export default Photos;
