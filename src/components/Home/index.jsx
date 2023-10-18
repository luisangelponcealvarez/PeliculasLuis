import React, { useState } from "react";
import Api from "../Api";
import Cards from "../Cards";
import Heder from "../Heder";
import Footer from "../Footer";
import { Cargando } from "../Cargando";

function Home() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const estado = Api(url);
  const { cargando, data } = estado;

  return (
    <>
      {cargando ? (
        <Cargando />
      ) : (
        <>
          {/* <Heder /> */}
          <Cards results={data.results} />
          <div className="m-auto text-center">
            <a
              onClick={() => setUrl(data.previous)}
              className="m-2 btn btn-dark"
            >
              Anterior
            </a>
            <a onClick={() => setUrl(data.next)} className="btn btn-dark">
              Siguiente
            </a>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
