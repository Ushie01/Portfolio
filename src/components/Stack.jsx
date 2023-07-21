import React from 'react';
import StackItems from './Shared/StackItems';
import Container from './container';
import Navbar from './Shared/Navbar';

const Stack = () => {
	return (
		<Container>
			<Navbar />
			<div className='mt-16 space-y-8'>
				<div className='flex flex-col  items-start justify-start'>
					<p className='text-violet-900 text-3xl font-extrabold'>
						My Tech Stack
					</p>
					<p className='mt-3 text-gray-500'>
						{' '}
						Technologies I’ve been working with recently
					</p>
				</div>
				<div className='mt-24'>
					<StackItems />
				</div>
			</div>
		</Container>
	);
};

export default Stack;
