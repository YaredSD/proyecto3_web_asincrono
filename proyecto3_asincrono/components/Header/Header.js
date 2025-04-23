import "./Header.css";

const template = () => `
    <img src="./assets/PinterestLogo.png" alt="Logo de Pinterest" id="Logo">
    <input type="text" id="SearchInput" placeholder="Busca lo que quieras...">
    <button id="SearchButton"><img src="./assets/Search.png" alt="Buscar"></button>
`

const Header = () => {
    document.querySelector("header").innerHTML = template();
}

export default Header;