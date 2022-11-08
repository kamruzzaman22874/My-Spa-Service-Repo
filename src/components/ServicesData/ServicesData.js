import React from 'react';
import { Link } from 'react-router-dom';

const ServicesData = ({ service }) => {
    console.log(service);
    const {_id, img, title, description,price}=service
    return (
			<div className='card card-side bg-base-200 lg:h-[400px] my-5 shadow-xl md:flex block'>
				<figure className='lg:w-1/2'>
					<img className='lg:w-full' src={img} alt='img' />
				</figure>

				<div className='card-body lg:w-1/2'>
					<h2 className='text-center text-xl font-bold italic'>{title}</h2>
					<p className='text-justify lg:py-16'>
						{description.slice(0, 400) + '...'}
					</p>
					<div className='lg:card-actions flex  justify-between'>
						<h2 className='bg-white shadow-lg rounded-lg lg:py-3 py-3  lg:px-2 font-bold lg:text-xl mr-2'>
							 Charge : {price}/-
						</h2>
						<Link to={`/service/${_id}`} className='btn bg-gay-400'>See details</Link>
					</div>
				</div>
			</div>
		);
};

export default ServicesData;