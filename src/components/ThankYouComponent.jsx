/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import thankYouImg from "../assets/images/thankYouImg.svg";

const ThankYouComponent = ({ ratingProvided }) => {
  return (
    <div className="tq-component">
      <img src={thankYouImg} width="162" height="108" className="tq-img" />
      <div className="total-rating">You selected {ratingProvided} out of 5</div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouComponent;
