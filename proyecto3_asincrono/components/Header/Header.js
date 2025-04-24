import "./Header.css";

const template = () => `
    <img src="./assets/PinterestLogo.png" alt="Logo de Pinterest" id="Logo">
    <input type="text" id="SearchInput" placeholder="Busca lo que quieras...">
    <select id="Select">
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
    </select>
    <button id="SearchButton"><img src="./assets/Search.png" alt="Buscar"></button>
`

const Header = () => {
    document.querySelector("header").innerHTML = template();
}

export default Header;