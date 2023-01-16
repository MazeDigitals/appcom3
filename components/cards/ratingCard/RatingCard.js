import React from "react";

const Star = ({ filled }) => {
  return <img src="svg/star.svg" className={`star ${filled && "filled"}`} />;
};

const RatingCard = (props) => {
  const { title, stars, stars_color, number_of_reviews, review_type } = props;

  let total_stars = [];
  for (let i = 0; i < 5; i++) {
    if (stars_color == "yellow") {
      total_stars.push(<Star key={i} filled={i < stars} />);
    } else {
      total_stars.push(<img src="png/green_star.png" />);
    }
  }

  return (
    <div className="rating_card text-center">
      <p className="title">{title}</p>
      <div className="stars flex flex_center">{total_stars}</div>
      <p className="medium_text">
        Based on{" "}
        <span className="bold underline">{number_of_reviews} reviews</span>
      </p>
      {review_type == "google" ? (
        <div className="flex flex_center">
          <img src="svg/google.svg" /> <p>Google Reviews</p>
        </div>
      ) : (
        <div className="flex flex_center">
          <img src="svg/trustpilot.svg" />
          <p>Trustpilot</p>
        </div>
      )}
    </div>
  );
};

export default RatingCard;
