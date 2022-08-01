import ReviewBubble from '../review-bubble/review-bubble.component';
import { UserCardContainer, UserReviewsContainer,UserReviews, UserDetailsContainer} from './user-card.styles';



const UserCard = () => {


  return (
    <UserCardContainer>
      <UserReviewsContainer>  
        <UserReviews>
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