import React from 'react';

const Header = () => {
	return (
		<div className='flex items-center justify-between mt-48'>
			<div className='flex flex-col items-center justify-between text-4xl font-extrabold'>
				<div className='text-violet-900 space-y-1 leading-10'>
					<p>Hi 👋</p>
					<p>my name is</p>
					<p className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-900'>
						Ushie Abu
					</p>
					<p>I build things for web</p>
				</div>
			</div>
			<div className='h-60 w-60 bg-gradient-to-b from-pink-500 via-violet-500 to-blue-500 p-1 rounded-full'>
				<div className='h-full w-full bg-white rounded-full'></div>
			</div>
		</div>
	);
};

export default Header;
