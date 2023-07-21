import React from 'react';
import Title from '../../Title';
import Card from './Card';
import { PROJECTS_DATA } from './constant/data';

const Projects = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-44'>
			<Title
				title='Projects'
				text='Things I’ve built so far'
			/>
			<div className='grid grid-cols-3 mt-24 gap-10'>
				{PROJECTS_DATA.map((value, index) => (
					<div
						key={index}
						className=''>
						<Card />
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
