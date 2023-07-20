import React from 'react';
import { Link } from 'react-router-dom';
import Linkdin from './assets/linkdin.svg';
import Github from './assets/Vector.svg';
import Twitter from './assets/twitter.svg';
import { Class, LINKS } from '../Data';

const Navbar = () => {
	return (
		<div className='flex flex-row items-center justify-between h-20 w-full '>
			<div className='flex flex-col items-center'>
				<p
					className={`font-extrabold text-extrabold text-3xl ${Class.p}`}>{`{FD}`}</p>
				<p className={`text-semibold font-bold ${Class.p}`}>Front Dev</p>
			</div>
			<nav className={Class.nav}>
				{LINKS.map((link, index) => (
					<Link
						key={index}
						to={link.to}
						className={Class.li}>
						{link.text}
					</Link>
				))}

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
