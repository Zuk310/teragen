import ReviewBubble from '../review-bubble/review-bubble.component';

import list from '../../data/dummyReviews';

import {
  ReviewsContainer,
  NoReviewsContainer,
  NoReviewsContent,
} from './reviews-block.styles';

const ReviewsBlock = () => {
  return (
    <ReviewsContainer>
      {list.length > 0 ? (
        list
          .slice(0)
          .reverse()
          .map((el) => <ReviewBubble review={el} key={el.key} />)
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
