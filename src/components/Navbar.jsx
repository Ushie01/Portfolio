import React from 'react';
import { Link } from 'react-router-dom';
import Linkdin from './assets/linkdin.svg';
import Github from './assets/Vector.svg';
import Twitter from './assets/twitter.svg';

const Class = {
	li: 'hover:text-violet-700 duration-150 hover:scale-105 hover:text-lg',
	nav: 'flex items-center justify-center space-x-16 font-bold text-gray-600',
	p: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500',
};

const Navbar = () => {
	return (
		<div className='flex flex-row items-center justify-between h-20 w-full '>
			<div className='flex flex-col items-center'>
				<p
					className={`font-extrabold text-extrabold text-3xl ${Class.p}`}>{`{FD}`}</p>
				<p className={`text-semibold font-bold ${Class.p}`}>Front Dev</p>
			</div>
			<nav className={Class.nav}>
				<Link
					to='#'
					className={Class.li}>
					Home
				</Link>

				<Link
					to='#'
					className={Class.li}>
					About
				</Link>

				<Link
					to='#'
					className={Class.li}>
					Tech Stack
				</Link>

				<Link
					to='#'
					className={Class.li}>
					Projects
				</Link>

				<Link
					to='#'
					className={Class.li}>
					Contact
				</Link>

				<div className='flex space-x-8'>
					<Link to=''>
						<img
							src={Github}
							alt={Github}
						/>
					</Link>

					<Link to=''>
						<img
							src={Twitter}
							alt={Twitter}
						/>
					</Link>

					<Link to=''>
						<img
							src={Linkdin}
							alt={Linkdin}
						/>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
