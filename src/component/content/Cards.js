import React, { useState } from "react";

import Card from "./Card";

const cat = require("../../img/Cat.jpg");
const me = require("../../img/profile_cropped.png");
const mii = require("../../img/mii.png");

const cards = [
  { img: cat, id: 1, desc: "cat" },
  { img: me, id: 2, desc: "woman" },
  { img: mii, id: 3, desc: "nintendo mii" },
  { img: me, id: 2, desc: "woman" },
  { img: mii, id: 3, desc: "nintendo mii" },
  { img: cat, id: 1, desc: "cat" },
];

const Cards = (props) => {
  const [flipped, setFlipped] = useState(null);
  const [last, setLast] = useState(null);
  const [two, setTwo] = useState(false);
  const [found, setFound] = useState({});
  const [numFound, setNumFound] = useState(0);

  const foundAll = numFound === cards.length / 2;

  function flip(card, idx) {
    if (!flipped) {
      setFlipped(card.id);
      setLast(idx);
    } else {
      if (last !== idx) {
        setTwo(true);
        if (flipped === card.id) {
          setFound({ ...found, [flipped]: true });
          setNumFound(numFound + 1);
        }
        setTimeout(() => {
          setTwo(false);
          setFlipped(null);
          setLast(null);
        }, 200);
      }
    }
  }
  const allCards = cards.map((card, idx) => {
    return (
      <Card
        key={idx}
        card={card}
        idx={idx}
        last={last}
        flip={flip}
        two={two}
        found={found}
      />
    );
  });

  return (
    <div id="CardGame">
      <header>
        <h2>Number of Matches found</h2>
        <h1>{numFound}</h1>
        {foundAll ? (
          <h1>Congrats! You found them all</h1>
        ) : (
          <h4>You still have {cards.length / 2 - numFound} left</h4>
        )}
      </header>
      <div className="cards-container">{allCards}</div>
    </div>
  );
};

export default Cards;
