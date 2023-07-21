import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/index';
import About from './components/About/index';
import Stack from './components/Stack';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
