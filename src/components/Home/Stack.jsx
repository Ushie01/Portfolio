import React from 'react';
// import { STACK_DATA } from '../constant/Data';
import { Title } from '../Title';
import StackItems from '../Shared/StackItems';

const Stack = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-44'>
			<Title
				styling={'items-center justify-center'}
				title='My Tech Stack'
				text=' Technologies I’ve been working with recently'
			/>
			<StackItems />
		</div>
	);
};

export default Stack;
