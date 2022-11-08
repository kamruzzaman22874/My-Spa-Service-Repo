import React from 'react';

import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
const AddService = () => {
       const { loading } = useContext(AuthContext);
				const [addservices, setAddservices] = useState({});
				
				if (loading) {
					return <progress className='progress progress-error w-56'></progress>;
				}
				const handleSubmit = (e) => {
					e.preventDefault();
					console.log(addservices);

					fetch('http://localhost:5000/services', {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(addservices),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.acknowledged) {
								toast.success('New Service Successfully Added!');
								// e.target.reset();
							}
						});
				};
				const handleBlue = (e) => {
					const fieldName = e.target.name;
					const value = e.target.value;
					const newServices = { ...addservices };
					newServices[fieldName] = value;
					setAddservices(newServices);
				};
    return (
			<div className='mt-10'>
				<form onSubmit={handleSubmit}>
					<div className='group'>
						<p className='text-secondary text--2xl font-serif'>Photo URL :</p>
						<input
							className='w-[300px] h-[30px] bg-gray-400  p-2'
							onBlur={handleBlue}
							type='text'
							name='img'
							placeholder='URL'
							id=''
						/>
					</div>
					<div className='group'>
						<p className='text-secondary text--2xl font-serif'>Title :</p>
						<input
							className='w-[300px] h-[30px] bg-gray-400 p-2'
							onBlur={handleBlue}
							type='text'
							name='title'
							placeholder='Title'
							id=''
						/>
					</div>
					<div className='group'>
						<p className='text-secondary text--2xl font-serif'>Fee :</p>
						<input
							className='w-[300px] h-[30px] bg-gray-400  p-2'
							onBlur={handleBlue}
							type='number'
							name='fee'
							placeholder='Fee'
							id=''
						/>
					</div>
					<div className='group'>
						<p className='text-secondary text--2xl font-serif'>Description :</p>
						<input
							className='w-[300px] h-[70px] bg-gray-400 p-2'
							onBlur={handleBlue}
							type='text'
							name='description'
							placeholder='Description'
							id=''
						/>
					</div>
					<button className='btn btn-secondary my-5'>Add Services</button>
				</form>
			</div>
		);
};

export default AddService;