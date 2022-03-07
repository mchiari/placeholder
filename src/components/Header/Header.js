import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='header-container'>
			<div className='header-logo'>Placeholder</div>
			<div className='header-search'>
				<input type='text' placeholder='search for something' />
			</div>
			<div className='header-userlogo'>userlogo</div>
		</div>
	);
};

export default Header;
