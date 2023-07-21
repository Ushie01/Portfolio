import React from 'react';
import { STACK_DATA } from '../Home/constant/Data';

const StackItems = () => {
	return (
		<div className='grid grid-cols-6 gap-24 mt-24'>
			{STACK_DATA.map((value, index) => (
				<img
					src={value}
					alt={value}
					key={index}
				/>
			))}
		</div>
	);
};

export default StackItems;
