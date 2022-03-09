import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPhotos, getSelectedPhotos } from '../../features/photoSlice';
import './PhotoDetail.css';

const PhotoDetail = () => {
	const dispatch = useDispatch();
	let { photoId } = useParams();
	const albumId = photoId.substring(1);

	const allPhotos = useSelector(getAllPhotos);

	const photos = allPhotos.filter(function (el) {
		return el.id === albumId;
	});

	const selectedPhotos = useSelector(getSelectedPhotos);

	console.log(selectedPhotos);

	const mapPhotos = selectedPhotos.map((el, i) => {
		return (
			<div key={i} className='photodetail-wrapper'>
				<div key={i} className='photodetail-top'>
					<img
						key={i}
						className='photo'
						alt={el?.title}
						src={el?.url}
					/>
				</div>
				<div className='photodetail-bottom'>
					<i>{el?.title}</i>
				</div>
			</div>
		);
	});

	return (
		<div className='photodetail-container'>
			<div className='photodetail-allwraper'>
				<div className='photodetail-title'>
					<h2>Album ID # {albumId}</h2>
				</div>
				{mapPhotos}
			</div>
		</div>
	);
};

export default PhotoDetail;
