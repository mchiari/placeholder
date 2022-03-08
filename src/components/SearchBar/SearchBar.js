import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const user = props.users;

	// https://www.youtube.com/watch?v=Q2aky3eeO40
	// search input com suggestions
	let matches = [];
	if (searchTerm.length > 0) {
		matches = user?.filter((user) => {
			const regex = new RegExp(`${searchTerm}`, 'gi');
			return user?.name?.match(regex);
		});
	}
	// console.log('matches', matches);

	const onChangeHandler = (text) => {
		setSuggestions(matches);
		setSearchTerm(text);
	};

	const onSuggestionHandler = (text) => {
		setSearchTerm(text);
		setSuggestions([]);
	};

	return (
		<div className='search'>
			<input
				type='text'
				value={searchTerm}
				placeholder='search for something'
				onChange={(e) => onChangeHandler(e.target.value)}
				onBlur={() => {
					setTimeout(() => {
						setSuggestions([]);
					}, 100);
				}}
			/>
			{suggestions &&
				suggestions.map((suggestion, i) => (
					<div
						className='suggestion'
						onClick={() => onSuggestionHandler(suggestion.name)}
						key={i}
					>
						{suggestion.name}
					</div>
				))}
		</div>
	);
};

export default SearchBar;
