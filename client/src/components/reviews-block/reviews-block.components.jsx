import ReviewBubble from '../review-bubble/review-bubble.component';

import list from '../../data/dummyReviews';

import {
  ReviewsContainer,
  NoReviewsContainer,
  NoReviewsContent,
} from './reviews-block.styles';
import { useContext } from 'react';
import { ReviewsContext } from '../../context/reviews.context';

const ReviewsBlock = () => {
  const {reviewsList} = useContext(ReviewsContext);

  return (
    <ReviewsContainer>
      {reviewsList.length > 0 ? (
        reviewsList
          .slice(0)
          .reverse()
          .map((el) => <ReviewBubble review={el} key={el._id} />)
      ) : (
        <>
          <NoReviewsContainer>
            <NoReviewsContent>No reviews added yet.</NoReviewsContent>
            <NoReviewsContent hyperLink={true} href='redirect'>
              Learn how to add reviews
            </NoReviewsContent>
          </NoReviewsContainer>
        </>
      )}
    </ReviewsContainer>
  );
};

export default ReviewsBlock;
