import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
	
    const serviceData = useLoaderData()
    const { title, img, description, price } = serviceData;
	console.log(serviceData);
	const { loading } = useContext(AuthContext);
	 if (loading) {
			return <progress className='progress progress-error w-56'></progress>;
		}
	
	
    return (
			<div className='card card-side bg-base-200 lg:h-[500px] my-5 shadow-xl block md:flex lg:m-2 lg:mt-3'>
				<figure>
					<PhotoProvider>
						<PhotoView src={img}>
							<img className='lg:w-full' src={img} alt='img' />
						</PhotoView>
					</PhotoProvider>
				</figure>

				<div className='card-body lg:w-1/2 flex'>
					<h2 className='text-center lg:text-xl lg:py-6  font-bold italic'>
						{title}
					</h2>
					<p className='text-justify'>{description}</p>
					<div className='card-actions  justify-between'>
						<h2 className='bg-white shadow-lg rounded-lg lg:py-3 py-3 px-2 font-bold text-xl'>
							Charge:{price}/-
						</h2>
						<button className='btn'>Review Now</button>
					</div>
				</div>
			</div>
		);
};

export default ServiceDetails;