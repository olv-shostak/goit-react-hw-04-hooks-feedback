import React from "react";
import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((item) => (
        <FeedbackItem key={item}>
          <FeedbackBtn
            type="button"
            name={item}
            onClick={() => {
                onLeaveFeedback(item);
            }}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </FeedbackBtn>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
}

