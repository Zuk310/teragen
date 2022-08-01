
import { useContext } from 'react';
import { ReviewsContext } from '../../context/reviews.context';
import { deleteReview } from '../../utils/server-calls/server-call';
import { ReviewBubbleContainer,
    ReviewBubbleTitle,
    ReviewBubbleDescription,
    ReviewBubbleDeleteIcon } from './review-bubble.styles';

const ReviewBubble = ({review}) => {

  const {getReviews} = useContext(ReviewsContext);

  const handleDelete = async () =>{
    await deleteReview(review._id);
    getReviews();
  }


  return (
    <>
    <ReviewBubbleContainer>
    <ReviewBubbleDeleteIcon width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleDelete}>
      <circle cx="10.5" cy="10" r="10" fill="#DC2D2D"/>
      <path d="M12.6213 7.8787L8.37867 12.1213" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.37867 7.87862L12.6213 12.1213" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </ReviewBubbleDeleteIcon>
        <ReviewBubbleTitle>{review.title}</ReviewBubbleTitle>
        <ReviewBubbleDescription>{review.desc}</ReviewBubbleDescription>
    </ReviewBubbleContainer>
    </>
  )
}

export default ReviewBubble;