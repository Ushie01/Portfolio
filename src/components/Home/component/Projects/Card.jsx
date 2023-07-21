import React from 'react';
import Image from '../../assets/Rectangle 4.png';
import Github from './img/github.svg';
import Lnk from './img/link.svg';
import { Link } from 'react-router-dom';

const Card = () => {
	return (
		<div className='w-58 shadow-2xl h-max rounded-lg'>
			<img
				src={Image}
				alt={Image}
				className='w-full'
			/>
			<div className='flex flex-col items-start justify-center p-6'>
				<p className=' text-2xl font-bold'>Project Tile goes here</p>
				<p className='text-gray-500 w-full mt-3'>
					This is sample project description random things are here in
					description This is sample project lorem ipsum generator for dummy
					content.
				</p>
				<p className='text-violet-600 text-xs mt-3'>
					Tech Stack: HTML, CSS, REACT, TYPESCRIPT
				</p>
				<div className='flex flex-row items-start justify-between w-full mt-6'>
					<Link to='#'>
						<div className='flex items-center space-x-2'>
							<img
								src={Lnk}
								alt={Lnk}
							/>
							<p className='underline'>Live Preview</p>
						</div>
					</Link>
					<Link to='#'>
						<div className='flex items-center space-x-2'>
							<img
								src={Github}
								alt={Github}
							/>
							<p className='underline'>View Code</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
