import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceData = useLoaderData()
    const { title, img, description, price } = serviceData;
    console.log(serviceData);
    return (
			<div className='card card-side bg-base-200 h-[500px] my-5 shadow-xl hidden md:flex lg:m-2'>
				<figure className=''>
					<img className='w-full' src={img} alt='img' />
				</figure>

				<div className='card-body w-1/2'>
					<h2 className='text-center text-xl py-6 font-bold italic'>{title}</h2>
					<p className='text-justify'>
						{description}
					</p>
					<div className='card-actions  justify-between'>
						<h2 className='bg-white shadow-lg rounded-lg py-3 px-2 font-bold text-xl'>
							Service Charge : {price} /-
						</h2>
						{/* <Link to={`/service/${_id}`} className='btn bg-gay-400'>
							See details
						</Link> */}
					</div>
				</div>
			</div>
		);
};

export default ServiceDetails;