import { Link } from "react-router-dom";
import Api from "../Api";
import Site from "../site";

function Heder() {
  async function init() {
    const pokemon = await Api(1);
    updatePokemon(pokemon);
  }

  init();

  function updatePokemon(pokemon) {
    <Site src={pokemon.sprites.front_default} name={forms.name} />;
  }
  window.search.addEventListener(`change`, async () => {
    const pokemon = await Api(window.search.value);
    updatePokemon(pokemon);
  });
  console.log(pokemon);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-info-subtle">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          PokeApiLuis
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Contact"
              >
                Contacto
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              id="search"
              className="form-control me-2"
              type="search"
              placeholder="Nombre o Id"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Heder;
