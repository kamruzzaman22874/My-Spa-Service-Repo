import React, {useContext, useState, useEffect  } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import toast from 'react-hot-toast';
import ReviewByAllUser from '../ReviewByAllUser/ReviewByAllUser';

const ServiceDetails = () => {
	


	const [getReviews, setGetReviews] = useState([]);
	const [reviews , setReviews] = useState(false)

	
	useEffect(() => {
		fetch(`http://localhost:5000/reviews/${_id}`)
			.then((res) => res.json())
			.then((data) => {
				setGetReviews(data.reverse());
			});
	}, [getReviews]);

	







	// const [reviews, setReviews] = useState();

	const serviceData = useLoaderData();
	const {_id, title, img, description, price } = serviceData;
	const {user,  loading } = useContext(AuthContext);
	const [change, setChange] = useState(false);

	

	

	//! handleReview btn.....
	
	const handleReview = (e) => {
		e.preventDefault();
		const textarea = e.target.review.value;

		const newReview = {
			serviceTitle: title,
			serviceImg: img,
			ServiceId: _id,
			message: textarea,
			image: user.photoURL,
			name: user.displayName,
			email: user.email,
		};
		// console.log(newReview.serviceImg);
		fetch('http://localhost:5000/reviews', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newReview),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					// setReviews([newReview ,...reviews])
					toast.success('You are successfully added your review !!');
					setChange(!change);
					setReviews(true);
					e.target.reset();
				}
			})
			.catch((err) => console.error(err));
			setReviews(false)
		
	};
	// console.log(reviews);
// useEffect(() => {
// 	fetch(`https://localhost/5000/reviews/${_id}`)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			setGetReviews(data.reverse());
// 		});
// }, [_id, change, reviews]);

	
	
	if (loading) {
		return <progress className='progress progress-error w-56'></progress>;
	}


	return (
		<div>
			<div className='card card-side bg-base-200 lg:h-[500px] my-5  shadow-xl block md:flex lg:m-2 lg:mt-3'>
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
			<div className='review-section lg:ml-96 mt-2'>
				<div>
					{user ? (
						<div className='gap-2'>
							<div className='flex m-5'>
								<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
									<div className='w-[50px] rounded-full mt-2'>
										<img src={user.photoURL} alt='' />
									</div>
								</label>
								<div>
									<h1 className='text-green-500 ml-3 text-2xl font-serif'>
										{user.displayName}
									</h1>
								</div>
							</div>
							<div>
								<form onSubmit={handleReview} className='flex'>
									<textarea
										className='text-gray-700 p-5'
										name='review'
										id=''
										cols='30'
										rows='3'
										placeholder='Give Your Review'
									></textarea>
									<button className='btn lg:ml-2 lg:mt-8 mt-8'>Submit</button>
								</form>
							</div>
						</div>
					) : (
						<div className='flex'>
							<p className='mx-5'>To add a review Please</p>
							<Link className='text-secondary hover:text-red-700' to='/login'>
								Login
							</Link>
						</div>
					)}
					<div className='review-section'>
						<ReviewByAllUser getReviews={getReviews}></ReviewByAllUser>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetails;