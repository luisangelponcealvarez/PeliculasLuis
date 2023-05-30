import Footer from "../Footer";
import Heder from "../Heder";
import "./site.css";

function Site(props) {
  return (
    <>
      <Heder />
      <div className="container">
        <div className="card-header">
          <h5 className="card-title">{}</h5>
        </div>
        <div className="card-body">
          <img src={props.src.sprites.front_default} alt="pokemon" />
        </div>
        <div className="card-footer">
          <p className="card-text text-capitalize">
            {props.name.forms[0].name}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Site;
