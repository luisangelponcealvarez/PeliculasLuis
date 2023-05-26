import "./Contacto.css";
import {
  ImLinkedin,
  AiFillGithub,
  FaInstagram,
  BsFacebook,
  FaTwitter,
  BsSpotify,
  AiFillYoutube,
} from "react-icons/all";
import React, { useState } from "react";
import mailtoLink from "mailto-link";
import Footer from "../Footer";
import Heder from "../Heder";

function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const sendEmail = () => {
    const mailtoUrl = mailtoLink({
      to: "poncealvarezluisangel4@gmail.com", // Dirección de correo electrónico de destino
      from: email, // Dirección de correo electrónico del remitente
      subject: subject,
      body: `Name: ${name}\n\n${body}`,
    });
    window.location.href = mailtoUrl;
  };

  return (
    <div className="ContainerContact">
      <Heder />
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h1>Contacto</h1>
          <label>Nombre:</label>
          <br />
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Asunto</label>
          <br />
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <br />
          <label>Mensaje:</label>
          <br />
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
          <button type="submit" className="btnEnviar cta">
            <span>Enviar email</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </form>

        <div className="redes">
          <a
            href="https://www.linkedin.com/in/luis-angel-ponce-alvarez-848826242/"
            target="_blank"
          >
            <ImLinkedin className="Linkedin" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCQ851l8kDeiZYfg6cozN__g"
            target="_blank"
          >
            <AiFillYoutube className="Youtube" />
          </a>

          <a href="https://github.com/luisangelponcealvarez/" target="_blank">
            <AiFillGithub className=" Github" />
          </a>

          <a
            href="https://www.instagram.com/poncealvarezluisangel/"
            target="_blank"
          >
            <FaInstagram className="Instagram" />
          </a>

          <a
            href="https://www.facebook.com/luisangel.poncealvarez.37"
            target="_blank"
          >
            <BsFacebook className="Facebook" />
          </a>

          <a href="https://twitter.com/Luisang01161226" target="_blank">
            <FaTwitter className="Twitter" />
          </a>
          <a
            href="https://open.spotify.com/user/nhf5pz5g4wdgjk0bvw2fzhakd?si=1ff6fa2155254f25"
            target="_blank"
          >
            <BsSpotify className="Spotify" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
