import './style.css'
import {createApi} from 'unsplash-js';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const WebBuild = () => {
  Header();

  Footer();
}

WebBuild();


//const APIURL = "https://api.unsplash.com/search/photos";
//const ACCESKEY = "umgdEkfCbnFxiTC0yln-zCxu1Mv8mxCeHuI3g5r4wws";
//("?client_id=umgdEkfCbnFxiTC0yln-zCxu1Mv8mxCeHuI3g5r4wws&page=1&query=office");