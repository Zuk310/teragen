import { useContext } from 'react';
import { ReviewsContext } from '../../context/reviews.context';
import { deleteAllReviews } from '../../utils/server-calls/server-call';

import {
  CounterContainer,
  Info,
  ReviewCount,
  UtilsContainer,
  UtilsBubble,
  UtilsText,
  BreakLine,
  UtilsContentContainer,
  Icons,
  SaveBubble
} from './utils-block.styles';



const UtilsBlock = () => {

  const {reviewsList,getReviews} = useContext(ReviewsContext);

  const deleteAll = async () =>{
    await deleteAllReviews();
    getReviews();
  }



  return (
    <UtilsContainer>
      <CounterContainer>
        <ReviewCount counter={true}>{reviewsList.length}</ReviewCount>
        <ReviewCount>app reviews</ReviewCount>
      </CounterContainer>
      <Info>
        Write the texts our accounts will use when reviewing your app on the App
        Store (Minimum 50 reviews).
      </Info>

      <UtilsBubble>
        <UtilsContentContainer>
  
          <Icons width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4281 13.336C11.2201 13.336 11.0681 13.312 10.9721 13.264C10.8841 13.208 10.8401 13.116 10.8401 12.988C10.8401 12.668 10.9121 12.368 11.0561 12.088C11.2081 11.8 11.4081 11.508 11.6561 11.212C11.7761 11.068 11.8961 10.936 12.0161 10.816C12.2481 10.56 12.4201 10.356 12.5321 10.204C12.6441 10.044 12.7001 9.89603 12.7001 9.76003C12.7001 9.31203 12.4041 9.08803 11.8121 9.08803C11.6041 9.08803 11.4161 9.11603 11.2481 9.17203C11.0881 9.22003 10.9161 9.28403 10.7321 9.36403C10.6041 9.42803 10.5161 9.46003 10.4681 9.46003C10.3641 9.46003 10.2521 9.40003 10.1321 9.28003C10.0201 9.15203 9.92013 9.00803 9.83213 8.84803C9.75213 8.68803 9.71213 8.56403 9.71213 8.47603C9.71213 8.15603 9.94813 7.91603 10.4201 7.75603C10.8921 7.58803 11.4081 7.50403 11.9681 7.50403C12.7761 7.50403 13.4121 7.69603 13.8761 8.08003C14.3401 8.46403 14.5721 8.98403 14.5721 9.64003C14.5721 10.08 14.4721 10.452 14.2721 10.756C14.0721 11.052 13.7961 11.352 13.4441 11.656L13.2401 11.836C12.9601 12.084 12.7481 12.292 12.6041 12.46C12.4681 12.62 12.3801 12.804 12.3401 13.012C12.3161 13.132 12.2561 13.216 12.1601 13.264C12.0641 13.312 11.9121 13.336 11.7041 13.336H11.4281ZM11.3681 16.024C10.8881 16.024 10.6481 15.896 10.6481 15.64V14.536C10.6481 14.28 10.8881 14.152 11.3681 14.152H11.7521C12.2321 14.152 12.4721 14.28 12.4721 14.536V15.64C12.4721 15.896 12.2321 16.024 11.7521 16.024H11.3681Z" fill="#C4D2DC"/>
          <circle cx="12" cy="12" r="8" stroke="#C4D2DC" strokeWidth="2"/>

          </Icons>
          <UtilsText>Learn how to add reviews</UtilsText> 
        </UtilsContentContainer>
        <Icons width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12L11 8" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12L11 16" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icons>
      </UtilsBubble>

      <UtilsBubble>
        <UtilsContentContainer>
          <Icons width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5 8C5 6.34315 6.34315 5 8 5H12.1716C12.702 5 13.2107 5.21071 13.5858 5.58579L18.4142 10.4142C18.7893 10.7893 19 11.298 19 11.8284V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V8Z" stroke="#C4D2DC" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M19 11H15C13.8954 11 13 10.1046 13 9V5" stroke="#C4D2DC" strokeWidth="2" strokeLinejoin="round"/>


          </Icons>
          <UtilsText>Import from file</UtilsText>
        </UtilsContentContainer>
        <Icons width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12L11 8" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12L11 16" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icons>
      </UtilsBubble>

      <UtilsBubble>
        <UtilsContentContainer>
          <Icons  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 11.5C19 11.7331 19 13.6484 19 13.6484C19 14.9472 17.9472 16 16.6484 16H14.7907C14.4794 16 14.1859 16.1449 13.9967 16.3921L12.397 18.4815C12.2291 18.7007 11.9153 18.7424 11.696 18.5745C11.6611 18.5477 11.6298 18.5164 11.603 18.4815L10.0033 16.3921C9.8141 16.1449 9.52058 16 9.20931 16H7.35156C6.05283 16 5 14.9472 5 13.6484V8C5 6.34315 6.34315 5 8 5C8 5 9.33333 5 10 5C10.2583 5 12.0916 5 12.5 5" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 2.5V7.5" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.5 5H21.5" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </Icons>
          <UtilsText>+10 generic reviews</UtilsText>
        </UtilsContentContainer>
        <Icons width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12L11 8" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 12L11 16" stroke="#C4D2DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icons>
      </UtilsBubble>

      <UtilsBubble type={"clear"}  onClick={deleteAll}>
        <Icons width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.8284 9.17158L9.17158 14.8284" stroke="#DC2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.17157 9.17156L14.8284 14.8284" stroke="#DC2D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Icons>
        <UtilsText>Clear all reviews</UtilsText>
      </UtilsBubble>

      <BreakLine/>
      <SaveBubble pressable={reviewsList.length}>
        <UtilsText>save</UtilsText>
      </SaveBubble>
    </UtilsContainer>
  );
};

export default UtilsBlock;
