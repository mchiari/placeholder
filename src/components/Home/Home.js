import React from 'react';

import './Home.css';

const Home = () => {
	return (
		<div className='home-container'>
			<div className='home-wrapper'>
				<h1>Welcome to Placeholder!</h1>
				This website was made for a job interview for front-end
				development. The following technologies were used and
				implemented:
				<ul className='list'>
					<li>React</li>
					<li>React-Router</li>
					<li>React-Redux</li>
					<li>Redux</li>
					<li>Redux Toolkit</li>
				</ul>
				The idea was to use the free fake API {'{JSON}'} Placeholder to
				fetch and display posts and its comments and also to list photo
				albums and its corresponding photographs.
				<h2>Click the links in the header to get started.</h2>
			</div>
		</div>
	);
};

export default Home;
