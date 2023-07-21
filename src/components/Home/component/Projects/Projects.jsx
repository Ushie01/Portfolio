import React from 'react';
import { Title } from '../../../Title';
import ProjectsList from '../../../Shared/ProjectsList';

const Projects = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-44'>
			<Title
				title='Projects'
				text='Things I’ve built so far'
				styling='items-center justify-center'
			/>
			<ProjectsList/>
		</div>
	);
};

export default Projects;
