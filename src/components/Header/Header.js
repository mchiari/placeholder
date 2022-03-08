import React from 'react';
import './Header.css';

const Header = () => {
	const logo = require('../../images/placeholderlogo.png');

	return (
		<div className='header-container'>
			<div className='header-logo'>Your mock feed</div>
			<div className='header-userlogo'>
				<img src={logo} />
			</div>
		</div>
	);
};

export default Header;
