
import { ReviewBubbleContainer,
    ReviewBubbleTitle,
    ReviewBubbleDescription,
    ReviewBubbleDeleteIcon } from './review-bubble.styles';

const ReviewBubble = () => {

  return (
    <>
    <ReviewBubbleContainer>
    <ReviewBubbleDeleteIcon width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.5" cy="10" r="10" fill="#DC2D2D"/>
      <path d="M12.6213 7.8787L8.37867 12.1213" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.37867 7.87862L12.6213 12.1213" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </ReviewBubbleDeleteIcon>
        <ReviewBubbleTitle>title</ReviewBubbleTitle>
        <ReviewBubbleDescription>title</ReviewBubbleDescription>
    </ReviewBubbleContainer>
    </>
  )
}

export default ReviewBubble;