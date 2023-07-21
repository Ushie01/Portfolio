export const Title = ({ title, text, styling }) => {
    return (
        <div className={`flex flex-col  ${styling}`}>
            <p className='text-violet-900 text-3xl font-extrabold'>{title}</p>
				<p className='mt-3 text-gray-500'>
					{' '}
                   {text}
            </p>
			</div>
		);
}