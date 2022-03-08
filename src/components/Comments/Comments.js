import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../features/cardSlice';
import './Comments.css';

const Comments = () => {
	const comments = useSelector(getComments);

	const com = comments;

	return (
		<div>
			<div className='comment'>
				<div className='comment-user'>{com[0]?.email} </div>
				<div className='comment-comment'>{com[0]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{com[1]?.email} </div>
				<div className='comment-comment'>{com[1]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{com[2]?.email} </div>
				<div className='comment-comment'>{com[2]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{com[3]?.email} </div>
				<div className='comment-comment'>{com[3]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{com[4]?.email} </div>
				<div className='comment-comment'>{com[4]?.body}</div>
			</div>
		</div>
	);
};

export default Comments;
