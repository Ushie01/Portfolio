import React from 'react';
import Github from './../../components/assets/Vector.svg';
import Twitter from './../../components/assets/twitter.svg';
import Linkdin from './../../components/assets/linkdin.svg';
import { Link } from 'react-router-dom';
import { LINKS } from '../constant/Data';
import { Class } from '../Home/constant/Data';

const Footer = () => {
	return (
		<div className='flex flex-col space-y-8'>
			<div className='flex flex-row items-center justify-between w-full mt-56'>
				<div className='flex flex-col items-center text-gray-600'>
					<p className='font-extrabold text-extrabold text-3xl'>{`{FD}`}</p>
					<p className='text-semibold font-bold'>Front Dev</p>
				</div>
				<div className='flex flex-row text-gray-500 space-x-16'>
					<p>+234 816 272 5007</p>
					<p>abugodwinaj@gmail.com</p>
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
				</div>
			</div>
			<hr className='border' />
			<div className='flex flex-row items-center justify-between'>
				<nav className={Class.nav}>
					{LINKS.map((link, index) => (
						<Link
							key={index}
							to={link.to}
							className={Class.li}>
							{link.text}
						</Link>
					))}
				</nav>
				<p className='font-thin text-gray-400'>
					Designed and built by <span className={Class.p}>Ushie Abu</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
