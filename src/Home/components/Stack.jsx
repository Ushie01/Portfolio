import React from 'react';
import { STACK_DATA } from '../constant/Data';
import Title from './Title';

const Stack = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-44'>
			<Title
				title='My Tech Stack'
				text=' Technologies I’ve been working with recently'
			/>
			<div className='grid grid-cols-6 gap-24 mt-24'>
				{STACK_DATA.map((value, index) => (
					<img
						src={value}
						alt={value}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Stack;
