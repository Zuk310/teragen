import styled from 'styled-components';

const NewReviewBlock = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 18px 20px 20px;
gap: 15px;

/* width: 430px;
height: 132px; */

/* Neutral/100 */

background: #FFFFFF;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
border-radius: 10px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 390px;
  height: 18px;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
const ReviewTitle = styled.input`
width: 330px;
height: 18px;

/* Body/Body bold */

font-family: 'Assistant';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

display: flex;
align-items: center;

/* Neutral/500 */

color: #39454C;



/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

outline: 0;

border:none;
&::content{
color: #39454C;
}

&::placeholder{
  color: #C4D2DC;
}

`;

const LetterCount = styled.div`
  width: 50px;
  height: 18px;

  /* Body/Body */

  font-family: 'Assistant';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  display: flex;
  align-items: center;
  /* justify-content: end; */
  text-align: right;

  /* Neutral/600 */

  color: #64757e;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BreakBar = styled.div`
  width: 390px;
  height: 1px;

  /* Neutral/300 */

  background: #ebeff7;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 390px;
  height: 45px;

  /* Inside auto layout */

  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
`;
const ReviewContent = styled.input`
width: 299px;
height: 18px;

/* Body/Body */

font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* identical to box height, or 129% */

display: flex;
align-items: center;
color: #39454C;

outline: 0;

/* Neutral/700 */

&::placeholder{
  color: #C4D2DC;
}

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

border:none;
`;

const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 11px;
  gap: 5px;

  width: 64px;
  height: 45px;

  /* Primary/500 */

  background: ${props => props.pressable ? "#ff206f" : "#DDE7F0"};
  border-radius: 10px;
  border: none;
  /* Inside auto layout */
  cursor: ${props => props.pressable ? "pointer" : "not-allowed"};
  flex: none;
  order: 0;
  flex-grow: 0;

  color: white;
  font-weight: 700;

  transition: all ease-in-out 0.2s;

  &:active{
    background: ${props => props.pressable ? "#cf1a5a" : "#DDE7F0"};
  }
`;

export {
  NewReviewBlock,
  TopSection,
  ReviewTitle,
  LetterCount,
  BreakBar,
  BottomSection,
  ReviewContent,
  AddButton,
};
