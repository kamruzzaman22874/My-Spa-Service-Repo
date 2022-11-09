import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServicesData from '../ServicesData/ServicesData';

const Service = () => {
    useTitle('service');
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
					.then((res) => res.json())
					.then((data) => setServices(data));
    },[])
    return (
			<div className='grid gap-6 grid-cols-1 mx-10'>
				
            {
                services.map((service) => (
					<ServicesData key={service._id} service={service}></ServicesData>
            ))
            }
			</div>
		);
};

export default Service;