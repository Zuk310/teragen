
import { ReviewBubbleContainer,
    ReviewBubbleTitle,
    ReviewBubbleDescription,
    ReviewBubbleDeleteIcon } from './review-bubble.styles';

const ReviewBubble = () => {

  return (
    <>
    <ReviewBubbleContainer>
    <ReviewBubbleDeleteIcon/>
        <ReviewBubbleTitle>title</ReviewBubbleTitle>
        <ReviewBubbleDescription>title</ReviewBubbleDescription>
    </ReviewBubbleContainer>
    </>
  )
}

export default ReviewBubble;