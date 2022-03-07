import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeed, getAllFeed } from '../../features/cardSlice';
import Card from '../Card/Card';

const Feed = () => {
	const posts = useSelector(getAllFeed);
	const feed = posts.posts;
	//console.log('fetched:', feed);

	return (
		<div>
			<div className='feed-container'>
				<Card feed={feed} />
			</div>
		</div>
	);
};

export default Feed;
