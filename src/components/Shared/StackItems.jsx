import React from 'react';
import { STACK_DATA } from '../Home/constant/Data';

const StackItems = () => {
	return (
		<div className='grid lg:grid-cols-6 grid-cols-3 lg:gap-24 gap-12 mt-24 lg:p-0 p-3'>
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
