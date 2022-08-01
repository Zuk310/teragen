import styled from'styled-components';

const ReviewBubbleDeleteIcon = styled.svg`
position: absolute;
color:white;
transform: scale(0.6);
opacity: 0%;
width: 20px;
height: 20px;
background: #dc2d2d;
border-radius: 50%;
top:-8px;
right:-10px;
cursor: pointer;

`

const ReviewBubbleTitle = styled.span`  
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;

display: flex;
align-items: center;


color: #FFFFFF;

flex: none;
order: 0;
flex-grow: 0;
`
const ReviewBubbleDescription = styled.span`  

font-family: 'Assistant';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;

display: flex;
align-items: center;
text-align: start;

color: rgba(255, 255, 255, 0.5);


flex: none;
order: 1;
flex-grow: 0;
`


const ReviewBubbleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 30px 12px 15px;


    position: relative;
    width: fit-content;

    max-width: 85%;
    height: auto;
    left: 1.5px;
    top: 5px;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px 10px 10px 2px;
    
    transition: all ease-in-out 0.2s;

    &:hover{
        background: rgba(255, 255, 255, 0.25);
    }

    &:hover ${ReviewBubbleDeleteIcon}{
        opacity: 100%;
        transform: scale(0.7);
        transition: all ease-in-out 0.2s;
    }
    &:hover ${ReviewBubbleDescription}{
        color: #FFFFFF;
    }
    margin: 10px 0px;
`

export {ReviewBubbleContainer,ReviewBubbleTitle,
    ReviewBubbleDescription,ReviewBubbleDeleteIcon};