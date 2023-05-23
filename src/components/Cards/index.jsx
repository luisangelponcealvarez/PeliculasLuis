import React from "react";
import CardPokemon from "./CardPokemon";
import "./Cards.css";

function Cards({ results }) {
  return (
    <>
      <ul className="cards">
        {results.map((p, index) => (
          <li className="card-item" key={index}>
            <CardPokemon url={p.url} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cards;
