import React, { useState } from "react";

const egg = require("../img/egg.png");
const cat = require("../img/Cat.jpg");
const me = require("../img/profile_cropped.png");
const mii = require("../img/mii.png");

const Cards = (props) => {
  const [flipFlag, setFlipFlag] = useState([null, false]);
  const [view, setView] = useState([null, null, 0]); //[id, idx, flips]

  function addFlip(idx) {
    console.log("b4", view);
    if (view[2] === 0) {
      setView([cards[idx]["id"], idx, 1]);
    } else if (view[2] === 1) {
      if (view[1] !== idx) {
        if (view[0] === cards[idx]["id"]) {
          alert("matched!");
        }
        setView([null, null, 0]);
      }
    }
    setFlipFlag([idx, !flipFlag[1]]);
  }

  const cards = [
    { img: cat, id: 1 },
    { img: me, id: 2 },
    { img: mii, id: 3 },
    { img: me, id: 2 },
    { img: mii, id: 3 },
    { img: cat, id: 1 },
  ];

  const allCards = cards.map((card, idx) => {
    return (
      <div key={idx} className="card-box" onClick={() => addFlip(idx)}>
        <img
          src={card.img}
          className={
            (flipFlag[0] === idx && !flipFlag[1] ? "flip-in" : "") +
            ((flipFlag[0] === idx && flipFlag[1]) || flipFlag[0] !== idx
              ? "flip-out"
              : "")
          }
        />
        <img
          src={egg}
          className={
            ((flipFlag[0] === idx && flipFlag[1]) || flipFlag[0] !== idx
              ? "flip-in"
              : "") + (flipFlag[0] === idx && !flipFlag[1] ? "flip-out" : "")
          }
        />
      </div>
    );
  });

  return (
    <>
      <div className="cards-container">{allCards}</div>
    </>
  );
};

export default Cards;
