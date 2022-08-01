import NewReview from '../new-review/new-review.component';
import ReviewBubble from '../review-bubble/review-bubble.component';
import { UserCardContainer, UserReviewsContainer,UserReviews, UserDetailsContainer} from './user-card.styles';



const UserCard = () => {


  return (
    <UserCardContainer>
      <UserReviewsContainer>  
        <UserReviews>
          <NewReview/>
          {/* test */}
          <ReviewBubble/>
          <ReviewBubble/>
          <ReviewBubble/>
          <ReviewBubble/>
          {/* test */}
        </UserReviews>
      </UserReviewsContainer>

      <UserDetailsContainer>
        
      </UserDetailsContainer>

    </UserCardContainer>
  )
}

export default UserCard;