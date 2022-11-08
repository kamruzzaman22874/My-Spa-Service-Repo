import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeLoaderData from '../HomeLoderData/HomeLoaderData';
import Slider from '../Slider/Slider';

const Home = () => {
        const [services, setServices] = useState([]);
				useEffect(() => {
					fetch('http://localhost:5000/service')
						.then((res) => res.json())
						.then((data) => setServices(data));
				}, []);
    return (
			<div>
				<Slider></Slider>
				<div className='grid gap-6 grid-cols-1 mx-10 my-5'>
					{services.map((service) => (
						<HomeLoaderData
							key={service._id}
							service={service}
						></HomeLoaderData>
					))}
				</div>
				<button className='my-5'>
					<Link className='btn bg-gay-400' to='/services'>
						See All
					</Link>
				</button>
			</div>
		);
};

export default Home;