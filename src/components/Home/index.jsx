import React from 'react';
import Navbar from '../Shared/Navbar';
import Header from '../Shared/Header';
import Stack from './Stack';
import Projects from './component/Projects/Projects';
import Footer from '../Shared/Footer';
import Container from '../container';

const Home = () => {
	return (
		<Container>
			<Navbar />
			<Header />
			<Stack />
			<Projects />
			<Footer />
		</Container>
	);
};

export default Home;
