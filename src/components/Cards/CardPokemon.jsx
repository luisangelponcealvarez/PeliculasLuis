import { Link } from "react-router-dom";
import Api from "../Api";
import React from "react";
import { Cargando } from "../Cargando";

function CardPokemon({ url }) {
  const estado = Api(url);

  const { cargando, data } = estado;

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : (
        <Link to={data.id}>
          <div className="card" style={{ width: "14rem" }}>
            <div className="card-header">
              <h5 className="card-title">{data.id}</h5>
            </div>
            <div className="card-body">
              <img src={data.sprites.front_default} alt="pokemon" />
            </div>
            <div className="card-footer">
              <p className="card-text text-capitalize">{data.forms[0].name}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default CardPokemon;
