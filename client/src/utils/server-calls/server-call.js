import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

//GET ALL
const getAllReviews = async () => {
  try {
    const data = await axios.get(`${API_URL}/reviews`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//POST
const postReview = async (review) => {
  console.log(`${API_URL}/reviews`);
  try {
    await axios.post(`${API_URL}/reviews`, review);
  } catch (error) {
    console.log(error);
  }
};

//DELETE by id
const deleteReview = async (reviewId) => {
  try {
    await axios.delete(`${API_URL}/reviews/${reviewId}`);
  } catch (error) {
    console.log(error);
  }
};

//DELETE ALL
const deleteAllReviews = async () => {
  try {
    await axios.delete(`${API_URL}/reviews/`);
  } catch (error) {
    console.log(error);
  }
};

export { getAllReviews, postReview, deleteReview, deleteAllReviews };
