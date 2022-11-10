import React, {useContext} from 'react';
import img from '../../../asset/spa-logo.jpg';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

// Navbar section

const Navbar = () => {

	const { user, logOut } = useContext(AuthContext);
	
	const handleLogOut = () => {
			toast.success('Successfully Logout!');
			logOut()
				.then(() => {})
				.catch((error) => console.error(error));
		};
    return (
			<div className='navbar bg-gray-400'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
						>
							<li>
								<Link to='/home'>Home</Link>
							</li>
							<li>
								<Link to='/services'>Services</Link>
							</li>
							<li>
								<Link to='/addservice'>Add Service</Link>
							</li>
							<li>
								<Link to='/myreviews'>My Reviews</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
						</ul>
					</div>
					<div className='flex ml-5'>
						<img className='w-[50px] rounded-full' src={img} alt='' />
						<Link
							to='/'
							className='btn btn-ghost hidden lg:block normal-case lg:text-xl text-white'
						>
							SPA SERVICE
						</Link>
					</div>
				</div>
				<div className='navbar-center hidden text-white font-bold text-xl lg:flex'>
					{user ? (
						<ul className='menu menu-horizontal p-0'>
							<li>
								<Link to='/home'>Home</Link>
							</li>
							<li>
								<Link to='/services'>Services</Link>
							</li>
							<li>
								<Link to='/addservice'>Add Service</Link>
							</li>
							<li>
								<Link to='/myreviews'>My Reviews</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
						</ul>
					) : (
						<ul className='menu menu-horizontal p-0'>
							<li>
								<Link to='/home'>Home</Link>
							</li>
							<li>
								<Link to='/blog'>Blog</Link>
							</li>
						</ul>
					)}
				</div>
				<div className='navbar-end'>
					<div className='lg:block'>
						<span className='mr-2'></span>
						<span className='py-10'>
							{user ? (
								<div className='mb-2 flex  gap-6'>
									<div
										className='tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary'
										data-tip={user.displayName}
									>
										<button>
											<img
												className='w-[50px]  rounded-full'
												src={user.photoURL}
												alt=''
											/>
										</button>
									</div>
									<button className='btn' onClick={handleLogOut}>
										logout
									</button>
								</div>
							) : (
								<Link to='/login'>
									<button className='btn'>Login</button>
								</Link>
							)}
						</span>
					</div>
				</div>
			</div>
		);
};

export default Navbar;