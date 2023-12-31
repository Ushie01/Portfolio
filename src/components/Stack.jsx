import React from 'react';
import StackItems from './Shared/StackItems';
import Container from './container';
import Navbar from './Shared/Navbar';
import { Title } from './Title';

const Stack = () => {
	return (
		<Container>
			<Navbar />
			<div className='mt-16 space-y-8'>
				<Title
					title='My Tech Stack'
					text=' Technologies I’ve been working with recently'
					styling={'items-start justify-start'}
				/>
				<div className='mt-24'>
					<StackItems />
				</div>
			</div>
		</Container>
	);
};

export default Stack;
