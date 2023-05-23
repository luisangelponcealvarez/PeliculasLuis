import "./404.css";
import image from "../../../public/img/404.gif";

function Error404() {
  return (
    <main className="Error404">
      <img className="image-404" src={image} alt="404" />
      <p className="notfound-text">Esta página no existe </p>
    </main>
  );
}

export default Error404;
