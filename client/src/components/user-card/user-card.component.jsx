import NewReview from '../new-review/new-review.component';
import ReviewsBlock from '../reviews-block/reviews-block.components';
import { UserCardContainer, UserReviewsContainer,UserReviews, UserDetailsContainer} from './user-card.styles';



const UserCard = () => {


  return (
    <UserCardContainer>
      <UserReviewsContainer>  
        <UserReviews>
          <NewReview/>
          <ReviewsBlock/>
        </UserReviews>
      </UserReviewsContainer>

      <UserDetailsContainer>
        
      </UserDetailsContainer>

    </UserCardContainer>
  )
}

export default UserCard;