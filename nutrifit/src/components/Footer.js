import "./footer.css";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

export const Footer = () => {
    return (
    <footer className="footer">
      <h3 className="tituloFooter">Siguenos en redes sociales</h3>
      <figure>
        <img src={facebook} alt="Facebook" className="logoFooter"/>
        <img src={instagram} alt="Instagram" className="logoFooter"/>
        <img src={twitter} alt="Twitter" className="logoFooter1"/>
      </figure>
      <div className="containerFooter">
        <p className="footer1">© 2023 Nutrifit by Karina Izzo</p>
      </div>
 
      </footer>
    )
  };
  