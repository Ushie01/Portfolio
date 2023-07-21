import React from 'react';
import Github from './img/github.svg';
import Lnk from './img/link.svg';
import { Link } from 'react-router-dom';

const Card = ({img, title, text, stack, url, git}) => {
	return (
		<div className='w-58 shadow-2xl rounded-lg'>
			<img
				src={img}
				alt={img}
				className='w-full'
			/>
			<div className='flex flex-col items-start justify-center p-6 '>
				<p className=' text-2xl font-bold'>{title}</p>
				<p className='text-gray-500 w-full mt-3'>
					{text}
				</p>
				<p className='text-violet-600 text-xs mt-3'>
					{`Tech Stack: ${stack}`}
				</p>
				<div className='flex flex-row items-start justify-between w-full mt-6 bottom-0 left-0 right-0'>
					<Link to={url}>
						<div className='flex items-center space-x-2'>
							<img
								src={Lnk}
								alt={Lnk}
							/>
							<p className='underline'>Live Preview</p>
						</div>
					</Link>
					<Link to={git}>
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
