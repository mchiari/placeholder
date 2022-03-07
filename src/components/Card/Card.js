import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFeed } from '../../features/cardSlice';

const Card = async (props) => {
	const feed = await props.feed;
	console.log(feed[0]);

	console.log('feed[0]', feed[0]);
	console.log('feed[0].Id', feed[0].id);

	return (
		<div className='card-container'>
			<div className='card-wrapper'>
				<div className='card-top'>
					<div className='card-post'>
						User Id
						{feed[0].id}
					</div>
				</div>
				<div className='card-bot'>
					<div className='card-comments'></div>
				</div>
			</div>
		</div>
	);
};

export default Card;
