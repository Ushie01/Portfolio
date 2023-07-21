import Calender from './Svg/calender.svg';
import Location from './Svg/location.svg';
import Office from './Svg/office.svg';

const Work = () => {
	return (
		<div className='mt-5 w-full'>
			<div className='flex flex-col items-start justify-between w-full mt-5'>
				<div className='flex flex-row items-center justify-between w-full'>
					<p className='text-gray-500 text-2xl'>Junior Web Developer</p>
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
							<p>Dr. Rajkumar’s Learning App</p>
						</div>
						<div className='flex space-x-3'>
							<img
								src={Location}
								alt='Location alt'
							/>
							<p>Bengaluru</p>
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
	);
};

export default Work;
