import React from 'react';
import { useSelector } from 'react-redux';
import { getAllComments } from '../../features/cardSlice';
import './Comments.css';

const Comments = (props) => {
	const prop = props;
	const allComments = useSelector(getAllComments);
	// console.log(allComments);

	const fiveComments = allComments.filter(function (el) {
		return el.postId === prop.postId;
	});

	// console.log(fiveComments);

	const mapComments = fiveComments.map((el, i) => {
		return (
			<div key={i} className='comment'>
				<div className='comment-user'>{el?.email} </div>
				<div className='comment-comment'>{el?.body}</div>
			</div>
		);
	});

	return <div>{mapComments}</div>;
};

export default Comments;
