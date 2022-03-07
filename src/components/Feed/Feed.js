import React from 'react';
import { useSelector } from 'react-redux';
import { getAllFeed } from '../../features/cardSlice';
import Card from '../Card/Card';

const Feed = () => {
	const posts = useSelector(getAllFeed);
	const feed = posts.posts;

	return (
		<div>
			<div className='feed-container'>
				<Card feed={feed} />
			</div>
		</div>
	);
};

export default Feed;
