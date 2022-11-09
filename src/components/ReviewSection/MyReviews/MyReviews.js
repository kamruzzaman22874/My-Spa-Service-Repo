import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import toast from 'react-hot-toast';
import MyReviewsLoader from './MyReviewsLoader';
const MyReviews = () => {
    useTitle('myreviews');
	const { user } = useContext(AuthContext);
	const [reviews, setReviews] = useState([])
	
	useEffect(() => {
		fetch(`http://localhost:5000/reviews?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setReviews(data));
	}, [user?.email]);
		const handleDelete = id => {
			const proceed = window.confirm(
				'Are you sure , you want to delete this review?'
			);

			if (proceed) {
				fetch(`http://localhost:5000/reviews/${id}`, {
					method: 'DELETE',
				})
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							toast.success('Delete Successfully!');
							const remaining = reviews.filter((rem) => rem._id !== id);
							setReviews(remaining);
							
						}
					});
			}
		};
	return (
		<div className=''>
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
							handleDelete={handleDelete}
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
