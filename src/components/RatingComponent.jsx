/* eslint-disable react/prop-types */
import { useState } from "react";

import iconStar from "../assets/images/iconStar.svg";

const RatingComponent = ({ getRatingSelectedStatus }) => {
  const [rating, setRating] = useState(null);
  const [error, setError] = useState(false);
  let array = Array(1, 2, 3, 4, 5);

  const handleRatingSelect = (num) => {
    setRating(num);
    setError(false);
  };

  const setRatingSelected = () => {
    if (rating === null) {
      setError(true);
      return;
    } else {
      getRatingSelectedStatus(rating);
    }
  };

  return (
    <div className="rating-component">
      <div className="star-container">
        <img src={iconStar} />
      </div>
      <h2>How did we do?</h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings-container">
        {array.map((num) => (
          <div
            key={num}
            className={`rating-number ${
              rating === num ? "rated-bg" : "normal-bg"
            }`}
            onClick={() => handleRatingSelect(num)}
          >
            {num}
          </div>
        ))}
      </div>
      <button onClick={setRatingSelected}>SUBMIT</button>
      {error && <p className="error-msg">*Please provide rating</p>}
    </div>
  );
};

export default RatingComponent;
