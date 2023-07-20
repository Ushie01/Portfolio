import React from 'react'

const Title = ({title, text}) => {
  return (
		<div className='flex flex-col  items-center justify-center'>
          <p className='text-violet-900 text-2xl font-extrabold'>{title}</p>
          <p className='mt-3 text-gray-500'> {text}</p>
		</div>
	);
}

export default Title
