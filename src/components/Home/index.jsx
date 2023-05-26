import React, { useState } from "react";
import Api from "../Api";
import Cards from "../Cards";
import Heder from "../Heder";

function Home() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const estado = Api(url);
  const { cargando, data } = estado;

  return (
    <>
      {cargando ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <Heder />
          <Cards results={data.results} />

          <div className="container m-auto text-center">
            <button
              onClick={() => setUrl(data.previous)}
              className="m-2 btn btn-dark"
            >
              Anterior
            </button>
            <button onClick={() => setUrl(data.next)} className="btn btn-dark">
              Siguiente
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
