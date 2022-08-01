import { useState } from 'react';
import {
  NewReviewBlock,
  TopSection,
  ReviewTitle,
  LetterCount,
  BreakBar,
  BottomSection,
  ReviewContent,
  AddButton,
} from './new-review.styles';

const initalState = { title: '', desc: '' };

const NewReview = () => {
  const [inputs, setInputs] = useState(initalState);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const pressableBool = inputs.title.length > 0 && inputs.desc.length;

  return (
    <NewReviewBlock>
      <TopSection>
        <ReviewTitle
          placeholder='Enter review title'
          onChange={handleChange}
          name='title'
          maxLength='255'
        />
        <LetterCount>{inputs.title.length}/255</LetterCount>
      </TopSection>
      <BreakBar />
      <BottomSection>
        <ReviewContent
          placeholder='Write your review text...'
          onChange={handleChange}
          name='desc'
        />
        <AddButton pressable={pressableBool} disabled={!pressableBool}>
          Add
        </AddButton>
      </BottomSection>
    </NewReviewBlock>
  );
};

export default NewReview;
