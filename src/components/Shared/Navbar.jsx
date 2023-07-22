import React from 'react';
import { Link } from 'react-router-dom';
import { Class, LINKS, SOCIAL_LINKS } from '../constant/Data';
import useDeviceType from './useDeviceType';
import Logo from './Logo';
import Menu from '../../components/assets/list.svg';

// Reusable Social Links Component
const SocialLinks = () => (
	<div className='flex space-x-8'>
		{SOCIAL_LINKS.map((link, index) => (
			<Link
				to={link.to}
				key={index}>
				<img
					src={link.icon}
					alt='Github alt'
				/>
			</Link>
		))}
	</div>
);

const Navbar = () => {
	const { isMobile } = useDeviceType();

	if (isMobile) {
		return (
			<div className='flex flex-col items-end justify-end'>
				<div className='flex flex-row items-center justify-between w-full'>
					<Logo />
					<img
						src={Menu}
						alt='Menu alt'
						className='h-8 w-8'
					/>
				</div>
				<SocialLinks />
				<hr className='border w-full my-2' />
			</div>
		);
	}

	return (
		<div className='flex flex-row items-center justify-between h-20 w-full '>
			<Logo />
			<img
				src=''
				alt=''
			/>
			<nav className={Class.nav}>
				{LINKS.map((link, index) => (
					<Link
						key={index}
						to={link.to}
						className={Class.li}>
						{link.text}
					</Link>
				))}
				<SocialLinks />
			</nav>
		</div>
	);
};

export default Navbar;
