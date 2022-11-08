import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Banner from '../Banner/Banner';
import Casual from '../Banner/Casual';
import HomeLoaderData from '../HomeLoderData/HomeLoaderData';
import Slider from '../Slider/Slider';

const Home = () => {
	const {loading} = useContext(AuthContext)
        const [services, setServices] = useState([]);
				useEffect(() => {
					fetch('http://localhost:5000/service')
						.then((res) => res.json())
						.then((data) => setServices(data));
				}, []);
	if (loading) {
		return <progress className='progress progress-error w-56'></progress>;
	}
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
			<div>
				<Banner></Banner>
			</div>
			<div>
				<Casual></Casual>
			</div>
			</div>
		);
};

export default Home;