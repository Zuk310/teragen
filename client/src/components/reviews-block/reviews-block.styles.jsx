import styled from 'styled-components';

const ReviewsContainer = styled.div`
  overflow-y: scroll;
  height: inherit;
  box-sizing: border-box;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;
const NoReviewsContainer = styled.div`
  /* width:100%; */
  text-align: center;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;
const NoReviewsContent = styled.a`
  font-family: 'Assistant';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  align-items: center;
  text-align: center;

  color: rgba(255, 255, 255, 0.5);

  text-decoration: ${(props) => (props.hyperLink ? 'underline' : 'none')};
  cursor: ${(props) => (props.hyperLink ? 'pointer' : '')};
`;
export { ReviewsContainer, NoReviewsContainer, NoReviewsContent };
