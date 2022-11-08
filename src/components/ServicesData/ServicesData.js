import React from 'react';
import { Link } from 'react-router-dom';

const ServicesData = ({ service }) => {
    console.log(service);
    const {_id, img, title, description,price}=service
    return (
			<div className='card card-side bg-base-200 h-[400px] my-5 shadow-xl hidden md:flex '>
				<figure className='w-1/2'>
					<img className='w-full' src={img} alt='img' />
				</figure>

				<div className='card-body w-1/2'>
					<h2 className='text-center text-xl font-bold italic'>{title}</h2>
					<p className='text-justify py-16'>
						{description.slice(0, 400) + '...'}
					</p>
					<div className='card-actions  justify-between'>
						<h2 className='bg-white shadow-lg rounded-lg py-3 px-2 font-bold text-xl'>
							Service Charge : {price} /-
						</h2>
						<Link to={`/service/${_id}`} className='btn bg-gay-400'>See details</Link>
					</div>
				</div>
			</div>
		);
};

export default ServicesData;