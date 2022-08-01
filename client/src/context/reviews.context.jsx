import { useState } from 'react';
import { createContext } from 'react';
import { getAllReviews } from '../utils/server-calls/server-call';


export const ReviewsContext = createContext({
  reviewsList: [],
  setReviewsList: () => [],
});

export const ReviewsProvider = ({ children }) => {
  const [reviewsList, setReviewsList] = useState([]);

  const getReviews = async () =>{
    const res = await getAllReviews();
    setReviewsList(res.data);
  }

  const value = {reviewsList ,setReviewsList, getReviews};

  return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>;
};
