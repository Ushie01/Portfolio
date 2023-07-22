import React from 'react';
import Ushie from '../Home/assets/Godwin.jpg';
import useDeviceType  from './useDeviceType';


const Header = () => {
	const { isMobile } = useDeviceType();

	if(isMobile){
		return (
			<div className='flex flex-col items-center justify-center'>
				<div className='h-76 w-76 bg-gradient-to-b from-pink-500 via-violet-500 to-blue-500 p-2 rounded-full'>
					<div className='flex items-center justify-center h-full w-full bg-white rounded-full'>
						<img
							src={Ushie}
							alt={Ushie}
							className='rounded-full h-72 w-72'
						/>
					</div>
				</div>
				<div className='flex flex-col items-center justify-between text-3xl font-extrabold w-full'>
					<div className='text-violet-900 space-y-2 leading-10'>
						<p>Hi 👋</p>
						<p>my name is</p>
						<p className='bg-clip-text text-transparent text-4xl bg-gradient-to-r from-blue-500 to-violet-900'>
							Ushie Abu
						</p>
						<p>I build things for web</p>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className='flex items-center justify-between mt-48'>
			<div className='flex flex-col items-center justify-between text-5xl font-extrabold'>
				<div className='text-violet-900 space-y-4 leading-10'>
					<p>Hi 👋</p>
					<p>my name is</p>
					<p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900'>
						Ushie Abu
					</p>
					<p>I build things for web</p>
				</div>
			</div>
			<div className='h-76 w-76 bg-gradient-to-b from-pink-500 via-violet-500 to-blue-500 p-2 rounded-full'>
				<div className='flex items-center justify-center h-full w-full bg-white rounded-full'>
					<img src={Ushie} alt={Ushie} className='rounded-full h-72 w-72' />
				</div>
			</div>
		</div>
	);
};

export default Header;
