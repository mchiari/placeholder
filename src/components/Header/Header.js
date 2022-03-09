import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	const logo = require('../../images/placeholderlogo.png');

	return (
		<div className='header-container'>
			<div className='header-logo'>Your mock feed</div>
			<div className='header-links'>
				<Link className='header-link' to='/feed'>
					Feed
				</Link>
				<Link className='header-link' to='/photos'>
					Photos
				</Link>
			</div>
			<div className='header-userlogo'>
				<Link to='/'>
					<img alt='placeholder logo' src={logo} />
				</Link>
			</div>
		</div>
	);
};

export default Header;
