import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import PhotoFeed from './components/PhotoFeed.js/PhotoFeed';
import PhotoDetail from './components/PhotoDetail/PhotoDetail';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/photos/' element={<PhotoFeed />} />
					<Route path='/photos/:photoId' element={<PhotoDetail />} />
					<Route path='/feed/' element={<Feed />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
