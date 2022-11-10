import React from 'react';
import { Link } from 'react-router-dom';

const ReviewByAllUserLoader = ({ getReviews }) => {
	const { _id, message, name, email, serviceTitle, serviceImg, time } =
		getReviews;
	console.log(getReviews);
	return (
		<div>
			<section className='body-font'>
				<div className='container px-5 py-5 mx-auto'>
					<div className=''>
						<div className='p-4  w-full'>
							<div className='h-full bg-[#1e2b47] bg-opacity-40 p-8 rounded'>
								<div className='flex justify-between'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										className='block w-5 h-5 text-gray-500 mb-4'
										viewBox='0 0 975.036 975.036'
									>
										<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
									</svg>
									<div className='time'>{time}</div>
									<div className='flex mb-4'>
										<Link to={`/update/${_id}`}>
											<button
												title='Edit'
												className='bg-slate-400 mr-2 text-black hover:bg-[#00511e] px-2 text-5xl rounded-xl'
											>
												+
											</button>
										</Link>
										<button
											title='Delete'
											className='bg-slate-400 text-black hover:bg-[#ff3811] px-5 text-2xl rounded-xl'
										>
											X
										</button>
									</div>
								</div>
								<div className='img'>
									<img src={serviceImg} alt='' />
								</div>
								<h1 className='text-white'>
									<span className='font-bold text-emerald-600'>PhotoType:</span>{' '}
									{serviceTitle}
								</h1>
								<p className='leading-relaxed text-white my-10'>
									<span className='font-bold text-emerald-600'>Review:</span>{' '}
									{message}
								</p>
								<Link to='' className='inline-flex items-center'>
									<img
										alt=''
										src={getReviews?.img}
										className='w-12 h-12 rounded-full flex-shrink-0 object-cover object-center'
									/>
									<span className='flex-grow flex flex-col pl-4'>
										<span className='title-font font-medium text-white'>
											{name}
										</span>
										<span className='title-font hidden lg:inline-block font-medium text-white'>
											{email}
										</span>
										<span className='text-secondary text-sm'>REVIEWER</span>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ReviewByAllUserLoader;
