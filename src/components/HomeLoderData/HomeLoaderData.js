import React from 'react';
import { Link } from 'react-router-dom';

const HomeLoaderData = ({ service }) => {
    const {_id , title ,img ,  description , price} = service
    return (
			<div className='card card-side bg-base-200 lg:h-[400px] shadow-xl md:flex block'>
				<figure className='lg:w-1/2'>
					<img className='lg:w-full ' src={img} alt='img' />
				</figure>

				<div className='card-body lg:w-1/2'>
					<h2 className='text-center lg:text-xl font-bold italic'>{title}</h2>
					<p className='text-justify lg:py-20'>{description.slice(0, 100) + '...'}</p>
					<div className='card-actions  justify-between lg:flex'>
						<h2 className='bg-white shadow-lg rounded-lg lg:py-3 lg:px-2 font-bold text-xl'>
							Service Charge : {price}/-
						</h2>
						<Link to='/services' className='btn bg-gay-400'>Details</Link>
					</div>
				</div>
			</div>
		);
};

export default HomeLoaderData;