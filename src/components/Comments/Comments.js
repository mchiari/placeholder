import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../features/cardSlice';
import './Comments.css';

const Comments = () => {
	const comments = useSelector(getComments);

	return (
		<div>
			<div className='comment'>
				<div className='comment-user'>{comments[0]?.email} </div>
				<div className='comment-comment'>{comments[0]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{comments[1]?.email} </div>
				<div className='comment-comment'>{comments[1]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{comments[2]?.email} </div>
				<div className='comment-comment'>{comments[2]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{comments[3]?.email} </div>
				<div className='comment-comment'>{comments[3]?.body}</div>
			</div>
			<div className='comment'>
				<div className='comment-user'>{comments[4]?.email} </div>
				<div className='comment-comment'>{comments[4]?.body}</div>
			</div>
		</div>
	);
};

export default Comments;
