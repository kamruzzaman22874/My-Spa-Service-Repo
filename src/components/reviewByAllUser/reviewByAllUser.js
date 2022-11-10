import ReviewByAllUserLoader from './ReviewByAllUserLoader';

const ReviewByAllUser = ({ reviews }) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 '>
			{reviews.map((getReviews) => (
				<ReviewByAllUserLoader
					getReviews={getReviews}
					key={getReviews._id}
				></ReviewByAllUserLoader>
			))}
		</div>
	);
};

export default ReviewByAllUser; 
