import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index';
import About from './components/About/index';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Home/Contact';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='AboutMe'
					element={<About />}
				/>
				<Route
					path='MyStack'
					element={<Stack />}
				/>
				<Route
					path='Projects'
					element={<Projects />}
				/>
				<Route
					path='Contact'
					element={<Contact />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
