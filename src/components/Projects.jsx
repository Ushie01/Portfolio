import React from 'react';
import Container from './container';
import Navbar from './Shared/Navbar';
import { Title } from './Title';
import ProjectsList from './Shared/ProjectsList';


const Projects = () => {
	return (
		<Container>
			<Navbar />
			<div className='mt-16 space-y-8'>
				<Title
					title='Projects'
					text='Things I’ve built so far'
					styling='items-start justify-start'
				/>
				<div className='mt-24'>
					<ProjectsList />
				</div>
			</div>
		</Container>
	);
};

export default Projects;
