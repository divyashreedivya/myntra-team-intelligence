import React from "react";
import classnames from "classnames";
import myntra from "./images/myntra.JPG";
import "./card.scss";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <>
 <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face">
        <img src={myntra} alt="myntra" />
      </div>
      <div className="card-face card-back-face">
        <img src={card.image} alt="myntra" />
      </div>
    </div>
    </>
  );
};

export default Card;
