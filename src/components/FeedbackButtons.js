import React from "react";
import PropTypes from "prop-types";

const FeedbackButtons = ({ handeleClick }) => {
  return (
    <>
      <button onClick={handeleClick} type="button" name="good">
        GOOD
      </button>
      <button onClick={handeleClick} type="button" name="neutral">
        NEUTRAL
      </button>
      <button onClick={handeleClick} type="button" name="bad">
        BAD
      </button>
    </>
  );
};
FeedbackButtons.propTypes = {
  handeleClick: PropTypes.func.isRequired
};
export default FeedbackButtons;
