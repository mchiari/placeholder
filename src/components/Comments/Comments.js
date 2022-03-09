import React from 'react';
import { useSelector } from 'react-redux';
import { getAllComments, getComments } from '../../features/cardSlice';
import './Comments.css';

const Comments = (props) => {
	const prop = props;
	const comments = useSelector(getComments);
	const allComments = useSelector(getAllComments);
	console.log(allComments);

	// const fiveComments = allComments.includes()

	const fiveComments = allComments.filter(function (el) {
		return el.postId === prop.postId;
	});

	console.log(fiveComments);

	// console.log(allComments[prop.postId]?.body);

	const mapComments = fiveComments.map((el, i) => {
		return (
			<div key={i} className='comment'>
				<div className='comment-user'>{el?.email} </div>
				<div className='comment-comment'>{el?.body}</div>
			</div>
		);
	});

	return <div>{mapComments}</div>;

	//SHOW ONLY ONE COMMENT FROM STATE
	// return (
	// 	<div>
	// 		<div className='comment'>
	// 			<div className='comment-user'>{comments[0]?.email} </div>
	// 			<div className='comment-comment'>{comments[0]?.body}</div>
	// 		</div>
	// 		<div className='comment'>
	// 			<div className='comment-user'>{comments[1]?.email} </div>
	// 			<div className='comment-comment'>{comments[1]?.body}</div>
	// 		</div>
	// 		<div className='comment'>
	// 			<div className='comment-user'>{comments[2]?.email} </div>
	// 			<div className='comment-comment'>{comments[2]?.body}</div>
	// 		</div>
	// 		<div className='comment'>
	// 			<div className='comment-user'>{comments[3]?.email} </div>
	// 			<div className='comment-comment'>{comments[3]?.body}</div>
	// 		</div>
	// 		<div className='comment'>
	// 			<div className='comment-user'>{comments[4]?.email} </div>
	// 			<div className='comment-comment'>{comments[4]?.body}</div>
	// 		</div>
	// 	</div>
	// );
};

export default Comments;
