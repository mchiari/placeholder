import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchComments, selectPost } from '../../features/cardSlice';
import Comments from '../Comments/Comments';
import './Card.css';

const Card = (props) => {
	const dispatch = useDispatch();
	const feed = props.feed;
	const user = props.users;

	// state pra determinar se mostra ou não os comments
	const [isHidden, setIsHidden] = useState(false);

	// Percorre o array de usuários para ver qual bate com o do post em questão e poder mostrar o @user
	let u = 'user';
	for (let index = 0; index < user?.length; index++) {
		if (user[index]?.id === feed?.userId) {
			u = user[index]?.id;
		}
	}

	const handlePostSelection = () => {
		dispatch(selectPost(feed));
		dispatch(fetchComments(feed?.id));
		setIsHidden(!isHidden);
	};

	return (
		<div className='card-container'>
			<div className='card-wrapper'>
				<div className='card-top'>
					<div className='card-user'>
						#{feed?.id} @{user[u]?.username.toLowerCase()}
					</div>
					<div className='card-title'>{feed?.title}</div>
					<div className='card-body'>{feed?.body}</div>
				</div>
				<div className='card-bot'>
					<div className='card-comments-show'>
						{isHidden && <Comments postId={feed?.id} />}
						<div
							className='see-comments'
							onClick={() => {
								handlePostSelection();
							}}
						>
							{isHidden ? 'Hide comments' : 'Show comments'}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
