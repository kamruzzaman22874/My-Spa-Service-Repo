import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import toast from 'react-hot-toast';
import MyReviewsLoader from './MyReviewsLoader';
const MyReviews = () => {
    useTitle('myreviews');
	const { user , logOut} = useContext(AuthContext);
	const [reviews, setReviews] = useState([])
	const [updateReview, setUpdateReview] = useState(false)
	const [updatedId, setUpdatedId] = useState({})

	 
	// useEffect uses by review API

	useEffect(() => {
		fetch(
			`http://localhost:5000/reviews?email=${user?.email}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem('spa-token')}`,
				},
			}
		)
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					return logOut();
				}
				return res.json();
			})
			.then((data) => {
				setReviews(data.reverse());
			});
	}, [user?.email, logOut ,updateReview]);

	// Review delete 

		const handleDelete = id => {
			const proceed = window.confirm(
				'Are you sure , you want to delete this review?'
			);

			if (proceed) {
				fetch(
					`http://localhost:5000/reviews/${id}`,
					{
						method: 'DELETE',
					}
				)
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

	// Dynamically data fetch for reviews
	
	const handleReviewUpdate = (id , email) => {
		setUpdateReview(!updateReview);
		setUpdatedId({id , email})
		// console.log(id ,email);

	}

	const handlerUpdateReview = event => {
		event.preventDefault();
		const form = event.target;
		const review = form.review.value;
		form.reset()
		console.log(review);
		console.log(updatedId);
		const reviewId = updatedId.id
		const userEmail = updatedId.email;
		setUpdateReview(!updateReview);

		fetch(
			`http://localhost:5000/reviews?id=${reviewId}&email=${userEmail}`,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('spa-token')}`,
				},
				body: JSON.stringify({ status: review }),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				// if (data.modifiedCount > 0) {
				// 	// const remaining = reviews.filter(rev => rev._id !== id)
				// 	// const approving = reviews.find(rev => rev._id === id)
				// 	approving.status = 'Edit'
				// 	const newReviews = [...remaining, approving]
				// 	setReviews(newReviews)
				// }
			});
	}

	return (
		<div className=''>
			<h1>MyReviews : {reviews.length}</h1>
			<div className='relative'>
				<h1 className='text-3xl font-medium title-font text-gray-400 mb-12 text-center'>
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
								handleReviewUpdate={handleReviewUpdate}
								review={review}
							></MyReviewsLoader>
						))}
					</div>
				)}
			</div>
			<div
				className={`${
					updateReview ? 'absolute' : 'hidden'
				} flex absolute  top-1/2 left-1/2`}
			>
				<form onSubmit={handlerUpdateReview} className=''>
					<textarea
						className=' p-5 bg-slate-600 text-white'
						name='review'
						id=''
						cols='30'
						rows='3'
						placeholder='Give Your Review'
					></textarea>
					<button type='submit' className='btn lg:ml-2 lg:mt-8 mt-8'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default MyReviews;
