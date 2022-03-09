import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllPhotos } from '../../features/photoSlice';

const PhotoDetail = () => {
	const dispatch = useDispatch();
	let { photoId } = useParams();
	const pId = photoId.substring(1);

	const allPhotos = useSelector(getAllPhotos);

	// const photo = allPhotos.filter(function (el) {
	// 	return el.id === photoId;
	// });

	function ph(value) {
		return value === pId;
	}

	var filtered = allPhotos.filter(ph);
	console.log(filtered);

	// const mapPhotos = photo.map((el, i) => {
	// 	return (
	// 		<div key={i} className='comment'>
	// 			<div className='comment-user'>{el?.url} </div>
	// 			<div className='comment-comment'>{el?.title}</div>
	// 		</div>
	// 	);
	// });

	// console.log(allPhotos);

	return (
		<div className='photodetail-container'>
			{/* {mapPhotos} */}
			{/* <div className='photodetail-wrapper'>
				<div className='photodetail-top'>{photo}</div>
				<div className='photodetail-bottom'></div>
			</div> */}
		</div>
	);
};

export default PhotoDetail;
