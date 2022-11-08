import React from 'react';

const Banner = () => {
    return (
			<section className ='text-gray-400 bg-gray-800 body-font'>
				<div className ='container px-5 py-24 mx-auto'>
					<div className ='flex flex-wrap -mx-4 -mb-10 text-center'>
						<div className ='sm:w-1/2 mb-10 px-4'>
							<div className ='rounded-lg h-64 overflow-hidden'>
								<img
									alt='content'
									className ='object-cover object-center h-full w-full'
									src='https://i.ibb.co/9VBpXNX/body-massage-1.jpg'
								/>
							</div>
							<h2 className ='title-font text-2xl font-medium text-white mt-6 mb-3'>
								You Get Home Service
							</h2>
							<p className ='leading-relaxed text-base'>
								For home service please
								<br/> Contact : 01914*******
							</p>
							<button className ='flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded'>
								More
							</button>
						</div>
						<div className ='sm:w-1/2 mb-10 px-4'>
							<div className ='rounded-lg h-64 overflow-hidden'>
								<img
									alt='content'
									className ='object-cover object-center h-full w-full'
									src='https://i.ibb.co/88VWfNt/gallery2.jpg'
								/>
							</div>
							<h2 className ='title-font text-2xl font-medium text-white mt-6 mb-3'>
								You get this service anywhere inside Dhaka City
							</h2>
							<p className ='leading-relaxed text-base'>
								<span>Address : Sector: 10, Road: 10</span> <br />
								<span>Uttara,Dhaka-1230</span>
							</p>
							<button className ='flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded'>
								More
							</button>
						</div>
					</div>
				</div>
			</section>
		);
};

export default Banner;