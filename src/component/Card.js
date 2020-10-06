import React, { useState, useEffect } from "react";
const egg = require("../img/egg.png");

const Card = (props) => {
  const [flipFlag, setFlipFlag] = useState(false);
  const { card, idx, last, flip, two, found } = props;
  function addFlip() {
    if (!found[card.id] && last !== idx) {
      setFlipFlag(!flipFlag);
      flip(card, idx);
    }
  }
  useEffect(() => {
    if (found[card.id]) {
      setFlipFlag(true);
    } else {
      setTimeout(() => {
        setFlipFlag(false);
      }, 1200);
    }
  }, [two, found, card.id]);
  return (
    <>
      <div className="card-box" onClick={() => addFlip()}>
        <img
          src={egg}
          className={!flipFlag ? "flip-in" : "flip-out"}
          alt={"back of card showing an egg"}
        />
        <img
          src={card.img}
          className={flipFlag ? "flip-in" : "flip-out"}
          alt={"front of card showing a " + card.desc}
        />
      </div>
    </>
  );
};

export default Card;
