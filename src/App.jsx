import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/index';
import About from './About/index';

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
