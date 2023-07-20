import React from 'react';
import Title from '../Title';
import Card from './Card';

const Projects = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-44'>
			<Title
				title='Projects'
				text='Things I’ve built so far'
			/>
			<div className='mt-8'>
				<Card />
			</div>
		</div>
	);
};

export default Projects;
