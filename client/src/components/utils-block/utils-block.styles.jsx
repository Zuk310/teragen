import styled from 'styled-components';

const UtilsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 270px;
  height: 278px;
`;
const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
`;
const ReviewCount = styled.span`
  font-family: 'Assistant';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;
  align-items: center;
  color: ${(props) => (props.counter ? '#FF206F' : '#39454C')};
`;

const Info = styled.p`
  font-family: 'Assistant';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;

  color: #64757e;
`;
const UtilsBubble = styled.div`
  ${({ type }) => handelType(type)};
  
  padding: 10px 10px 11px;
  gap: 5px;
  
  width: 280px;
  height: 45px;
  
  border-radius: 10px;
  
  cursor: pointer;
  &:hover{
    ${({ type }) => handelTypeHover(type)};
  }
`;

const SaveBubble = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align:center;

        padding: 10px 10px 11px;
        gap: 5px;
        
        width: 280px;
        height: 45px;
        
        border-radius: 10px;
        
        cursor: pointer;

        background-color: ${props => props.pressable > 0 ? `#FF206F` : `#DDE7F0`};
        color: #FFFFFF;
        
        &:hover{
          background-color: ${props => props.pressable > 0 ? `#ec1d66` : `#DDE7F0`};
        }

`

const UtilsContentContainer =styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
const UtilsText= styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`

const Icons = styled.svg``

const BreakLine = styled.div`
width: 280px;
height: 1px;

/* Neutral/300 */

background: #EBEFF7;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`


const handelType = (type) =>{
  switch(type){
    case "clear":
       return `
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #FFFFFF;
        color: #DC2D2D;
        border: 1px solid #FFDDDD;
        border-radius: 10px;
        `
    default:
    return `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #ebeff7;
        color: #64757E
        `

  }
}
const handelTypeHover = (type) =>{
  switch(type){
    case "clear":
       return `
        background-color: #fff8f8;
        `
    default:
    return `
        background-color: #e2e6ec;
        `
  }
}

export {
  UtilsContainer,
  CounterContainer,
  ReviewCount,
  Info,
  UtilsBubble,
  SaveBubble,
  UtilsText,
  UtilsContentContainer,
  BreakLine,
  Icons
};
