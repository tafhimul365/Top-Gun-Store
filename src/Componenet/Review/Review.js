import useReview from '../../Utilities/myHooks/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews] = useReview()
    return (
        <div>
            <h1 className="text-3xl text-blue-900 font-bold" >Customer Reviews</h1>
            {
                reviews.map(review => <ReviewCard key={review.id} review={review}></ReviewCard>)

            }
        </div>
    );
};

export default Review;