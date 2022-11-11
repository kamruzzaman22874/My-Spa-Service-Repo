import React from 'react';
import toast from 'react-hot-toast';
import ReviewByAllUserLoader from '../ReviewByAllUserLoader/ReviewByAllUserLoader';
// import ReviewByAllUserLoader from './ReviewByAllUserLoader';

const ReviewByAllUser = ({ getReviews }) => {
	//! Handle Delete
	const handleDelete = (id) => {
		toast.error(`For deleting review 
		please go my reviews page!!!`);
	};
	//! Handle Update
	const handleUpdate = (id) => {
		toast.error(`For updating review 
		please go my reviews page!!!`);
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 '>
			{getReviews.map((getReview) => (
				<ReviewByAllUserLoader
					getReview={getReview}
					handleDelete={handleDelete}
					handleUpdate={handleUpdate}
				></ReviewByAllUserLoader>
			))}
		</div>
	);
};

export default ReviewByAllUser;
