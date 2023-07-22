import React from 'react';
import Navbar from '../Shared/Navbar';
import Work from './Work';
import Calender from './Svg/calender.svg';
import Office from './Svg/office.svg';
import Container from '../container';
import { WORK_DATA } from '../Home/component/Projects/constant/data';


const About = () => {
	return (
		<Container>
			<Navbar />
			<div className='flex flex-col items-start justify-start mt-16 lg:w-4/6 w-full'>
				<p className='text-3xl text-violet-900 font-extrabold'>About Me</p>
				<p className='mt-8 text-gray-500'>
					Recent university graduate in electrical and electronics engineering,
					seeking to enter the marketing industry by leveraging my ability as a
					frontend developer. A dedicated worker aiming for a more efficient web
					application for users.
				</p>

				<p className='text-3xl text-violet-900 font-extrabold mt-10'>
					Work Experience
				</p>

				<div className='flex flex-col w-full'>
					{WORK_DATA.map((value, index) => (
						<div key={index}>
							<Work {...value} />
						</div>
					))}
				</div>

				<p className='text-3xl text-violet-900 font-extrabold mt-10'>
					Education
				</p>
				<div className='lg:mt-5 mt-0 w-full'>
					<div className='flex flex-col items-start justify-between w-full mt-5'>
						<div className='flex flex-row items-center justify-between w-full'>
							<p className='text-gray-500 lg:text-2xl text-xl'>
								Bachelor in Electrical and Electronics Engineering
							</p>
							<div className='bg-green-200 px-5 py-1 rounded-full'>
								<p className='text-green-800 text-xs'>Full Time</p>
							</div>
						</div>
						<div className='flex lg:flex-row flex-col lg:items-center justify-between lg:space-y-0 space-y-2 items-start text-sm text-gray-400 mt-2 w-full'>
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
