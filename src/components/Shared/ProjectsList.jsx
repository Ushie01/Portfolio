import React from 'react'
import { PROJECTS_DATA } from '../Home/component/Projects/constant/data';
import Card from '../Home/component/Projects/Card';

const ProjectsList = () => {
  return (
		<div className='grid lg:grid-cols-3 grid-cols-1 mt-24 gap-10'>
			{PROJECTS_DATA.map((value, index) => (
				<div
					key={index}
					className=''>
					<Card {...value} />
				</div>
			))}
		</div>
	);
}

export default ProjectsList
