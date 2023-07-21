import React from 'react';
import Navbar from '../Shared/Navbar';
import Work from './Work';
import Calender from './Svg/calender.svg';
import Office from './Svg/office.svg';
import Container from '../container';


const About = () => {
	return (
		<Container>
			<Navbar />
			<div className='flex flex-col items-start justify-start mt-16 w-4/6'>
				<p className='text-3xl text-violet-900 font-extrabold'>About Me</p>
				<p className='mt-8 text-gray-500'>
					The Generator App is an online tool that helps you to export
					ready-made templates ready to work as your future website. It helps
					you to combine slides, panels and other components and export it as a
					set of static files: HTML/CSS/JS.
				</p>
				<p className='text-3xl text-violet-900 font-extrabold mt-10'>
					Work Experience
				</p>
				<Work />
				<p className='text-3xl text-violet-900 font-extrabold mt-10'>
					Education
				</p>
				<div className='mt-5 w-full'>
					<div className='flex flex-col items-start justify-between w-full mt-5'>
						<div className='flex flex-row items-center justify-between w-full'>
							<p className='text-gray-500 text-2xl'>
								Bachelor in Electrical and Electronics Engineeringr
							</p>
							<div className='bg-green-200 px-5 py-1 rounded-full'>
								<p className='text-green-800 text-xs'>Full Time</p>
							</div>
						</div>
						<div className='flex flex-row items-center justify-between text-sm text-gray-400 mt-2 w-full'>
							<div className='flex flex-row items-start space-x-5'>
								<div className='flex space-x-3'>
									<img
										src={Office}
										alt='Office alt'
									/>
									<p>Cross River University of Science and Technology</p>
								</div>
							</div>
							<div className='flex space-x-3'>
								<img
									src={Calender}
									alt='Calender alt'
								/>
								<p>Sep 2021 - Dec 2021</p>
							</div>
						</div>
					</div>
					<hr className='mt-5' />
				</div>
			</div>
		</Container>
	);
};

export default About;
