import React from 'react';
import { Link } from 'react-router-dom';

// Unique part down the banner section

const Casual = () => {
    return (
			<section className ='text-gray-400 bg-gray-900 body-font'>
				<div className ='container px-5 py-24 mx-auto flex flex-col'>
					<div className ='lg:w-4/6 mx-auto'>
						<div className ='rounded-lg h-64 overflow-hidden'>
							<img
								alt='content'
								className ='object-cover object-center h-full w-full'
								src='https://i.ibb.co/yhh6tsn/message-1.jpg'
							/>
						</div>
						<div className ='flex flex-col sm:flex-row mt-10'>
							<div className ='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
								<div className ='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600'>
									<img
										className='rounded-full'
										src='https://i.ibb.co/PwnwKtB/profile-1.jpg'
										alt=''
									/>
								</div>
								<div className ='flex flex-col items-center text-center justify-center'>
									<h2 className ='font-medium title-font  text-white text-lg'>
										Owner : Kamruzzaman
									</h2>
									<div className ='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
									<p className ='text-base text-gray-400'>
										Raclette knausgaard hella meggs normcore williamsburg enamel
										pin sartorial venmo tbh hot chicken gentrify portland.
									</p>
								</div>
							</div>
							<div className ='sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
								<p className ='leading-relaxed text-lg  py-20'>
									Away Spa is not new, but this treatment is. The Diamonds are
									Forever treatment aims to cleanse your skin thoroughly with
									pure diamond powder, promising a more radiant-looking
									complexion. This two-hour treatment begins with a 30-minute
									body scrub followed by a 30-minute diamond body wrap and a
									60-minute diamond oil massage.
								</p>
								<Link to='' className ='text-indigo-400 inline-flex items-center lg:ml-48'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										className ='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h14M12 5l7 7-7 7'></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
};

export default Casual;