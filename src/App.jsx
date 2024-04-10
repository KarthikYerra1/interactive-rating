import { useState } from "react";

import RatingComponent from "./components/RatingComponent";
import ThankYouComponent from "./components/ThankYouComponent";

const App = () => {
  const [ratingSelected, setRatingSelected] = useState(false);
  const [ratingProvided, setRatingProvided] = useState(null);

  const getRatingSelectedStatus = (rating) => {
    console.log(rating);
    setRatingProvided(rating);
    setRatingSelected(true);
  };

  return (
    <div className="app-container">
      {ratingSelected ? (
        <ThankYouComponent ratingProvided={ratingProvided} />
      ) : (
        <RatingComponent getRatingSelectedStatus={getRatingSelectedStatus} />
      )}
    </div>
  );
};

export default App;
