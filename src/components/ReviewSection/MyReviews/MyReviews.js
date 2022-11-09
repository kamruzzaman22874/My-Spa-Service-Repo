import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
// import { AuthContext } from '../../context/AuthProvider';
// import MyReviewsLoader from '../MyReviews/MyReviewsLoader';
// import useTitle from '../../hooks/useTitle';
import MyReviewsLoader from './MyReviewsLoader';
const MyReviews = () => {
	//! Dynamically Title added by custom hook...
	// useTitle('My Reviews');
	//! Bring user info From Context API...
	const { user } = useContext(AuthContext);
	//! useState for storing data which get by email...
	const [reviews, setReviews] = useState([]);

	//! get data from mongodb by user email...
	useEffect(() => {
		fetch(`http://localhost:5000/reviews?email=${user.email}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [user?.email]);
	return (
		<div>
			<h1>MyReviews : {reviews.length}</h1>
			<div>
				<h1 className='text-3xl font-medium title-font text-white mb-12 text-center'>
					All Reviews For {user.displayName}
				</h1>
				{reviews.length === 0 ? (
					<p className='text-slate-300 text-2xl font-serif '>
						There are no review
					</p>
				) : (
					<div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 '>
						{reviews.map((review) => (
							<MyReviewsLoader
								key={review._id}
								review={review}
							></MyReviewsLoader>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default MyReviews;
