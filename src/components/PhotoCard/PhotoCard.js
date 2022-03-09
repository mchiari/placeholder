import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllPhotos } from '../../features/photoSlice';
import Photos from '../Photos/Photos';
import './PhotoCard.css';

const PhotoCard = (props) => {
	const dispatch = useDispatch();
	const feed = props.feed;
	const user = props.users;

	// state pra determinar se mostra ou não os comments
	const [isHidden, setIsHidden] = useState(true);

	// Percorre o array de usuários para ver qual bate com o do post em questão e poder mostrar o @user
	let u = 'user';
	for (let index = 0; index < user?.length; index++) {
		if (user[index]?.id === feed?.userId) {
			u = feed?.userId - 1;
		}
	}

	const handlePostSelection = () => {
		// dispatch(selectPost(feed));
		dispatch(fetchAllPhotos(feed?.id));
		setIsHidden(false);
		// if (isHidden === true) {
		// 	setIsHidden(false);
		// }
		// if (isHidden === false) {
		// 	setIsHidden(true);
		// }
		setIsHidden(!isHidden);
	};

	return (
		<div className='card-container'>
			<div className='card-wrapper'>
				<div className='card-top'>
					<div className='card-user'>
						#{feed?.id} @{user[u]?.name}
					</div>
					<div className='card-title'>{feed?.title}</div>
					<div className='card-body'>{feed?.body}</div>
				</div>
				<div className='card-bot'>
					<div className='card-comments-show'>
						{isHidden ? null : <Photos albumId={feed?.id} />}
						<div
							className='see-comments'
							onClick={() => {
								handlePostSelection();
							}}
						>
							{isHidden ? 'Show album...' : 'Hide album...'}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhotoCard;
