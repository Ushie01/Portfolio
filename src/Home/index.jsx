import React from 'react';
import Navbar from '../components/Navbar';
import Component from '../components';
import Header from './components/Header';
import Stack from './components/Stack';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';


const Home = () => {
	return (
		<Component>
			<Navbar />
			<Header />
			<Stack />
			<Projects />
			<Footer />
		</Component>
	);
};

export default Home;
