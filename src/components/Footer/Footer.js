import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-element'>
				<div>Placeholder App - mock fetching from</div>
				<a href='https://jsonplaceholder.typicode.com/'>
					https://jsonplaceholder.typicode.com/
				</a>
			</div>
			<div className='footer-element'>made by </div>
			<div className='footer-element-color'>
				<a href='https://github.com/mchiari'>
					https://github.com/mchiari
				</a>
			</div>
		</div>
	);
};

export default Footer;
