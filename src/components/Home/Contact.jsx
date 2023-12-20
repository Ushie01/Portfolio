import React from 'react'
import Container from '../container';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Class } from '../constant/Data';


const Contact = () => {
  return (
		<Container>
			<Navbar />
			<div className='flex flex-col items-center justify-center mt-32'>
				<p className='text-violet-900 lg:text-3xl text-md font-extrabold'>
					For any questions please mail me:
				</p>
                         <p className={`${Class.p} text-3xl font-semibold `}>
					abugodwinaj@gmail.com
				</p>
			</div>
			<Footer />
		</Container>
	);
}

export default Contact
