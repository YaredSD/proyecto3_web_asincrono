import "./Footer.css";

const template = () => `\
      <p>Proyecto 3 Web Asincrono</p>
      <p>Developer: Yared Santana</p>
      <p>&copy; Copyright 2025 - Todos los derechos reservados<p>
      <img src="./assets/PinterestLogoMini.png" alt="Logo de Pinterest" id="LogoFooter">
`;

const Footer = () => {
    document.querySelector("footer").innerHTML = template();
};

export default Footer;