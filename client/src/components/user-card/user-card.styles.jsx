import styled from'styled-components';

const UserCardContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 830px;
height: 549px;

/* Neutral/100 */

background: #FFFFFF;
box-shadow: 0px 10px 70px rgba(0, 0, 0, 0.2);
border-radius: 20px;
`

const UserReviewsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 20px 0px;

width: 430px;
height: 549px;
/* Gradients/Grays */

background: linear-gradient(72.2deg, #39454C 0%, #64757E 100%);
border-radius: 20px 0px 0px 20px;

/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
`

const UserReviews = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px 15px 0px;
gap: 5px;

width: 430px;
height: 380px;


/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`
const UserDetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding:40px;
gap: 40px;

width: 300px;
height: 489px;
/* Neutral/100 */

background: #FFFFFF;
border-radius: 0px 20px 20px 0px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
`
export {UserCardContainer, UserReviewsContainer,UserReviews,UserDetailsContainer};