import { Link } from "react-router-dom";
import { Class } from "../constant/Data";

const Logo = () => {
	return (
		<Link to='/'>
			<div className='flex flex-col items-center'>
				<p
					className={`font-extrabold text-extrabold text-3xl ${Class.p}`}>{`{FD}`}</p>
				<p className={`text-semibold font-bold ${Class.p}`}>Front Dev</p>
			</div>
		</Link>
	);
};

export default Logo;
