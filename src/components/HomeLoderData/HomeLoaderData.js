import React from 'react';
import { Link } from 'react-router-dom';

const HomeLoaderData = ({ service }) => {
    const {_id , title ,img ,  description , price} = service
    return (
			<div className='card card-side bg-base-200 h-[400px] shadow-xl hidden md:flex '>
				<figure className='w-1/2'>
					<img className='w-full ' src={img} alt='img' />
				</figure>

				<div className='card-body w-1/2'>
					<h2 className='text-center text-xl font-bold italic'>{title}</h2>
					<p className='text-justify py-20'>{description.slice(0, 100) + '...'}</p>
					<div className='card-actions  justify-between'>
						<h2 className='bg-white shadow-lg rounded-lg py-3 px-2 font-bold text-xl'>
							Service Charge : {price}/-
						</h2>
						<Link to='/services' className='btn bg-gay-400'>Details</Link>
					</div>
				</div>
			</div>
		);
};

export default HomeLoaderData;