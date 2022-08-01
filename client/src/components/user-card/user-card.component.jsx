import { useContext, useEffect } from 'react';
import { ReviewsContext } from '../../context/reviews.context';
import NewReview from '../new-review/new-review.component';
import ReviewsBlock from '../reviews-block/reviews-block.components';
import UtilsBlock from '../utils-block/utils-block.component';
import {
  UserCardContainer,
  UserReviewsContainer,
  UserReviews,
  UserDetailsContainer,
} from './user-card.styles';

const UserCard = () => {
  const {getReviews} = useContext(ReviewsContext);

  useEffect(()=>{
    getReviews();
  },[])


  return (
    <UserCardContainer>
      <UserReviewsContainer>
        <UserReviews>
          <NewReview />
          <ReviewsBlock />
        </UserReviews>
      </UserReviewsContainer>
      <UserDetailsContainer>
        <UtilsBlock />
      </UserDetailsContainer>
    </UserCardContainer>
  );
};

export default UserCard;
