import './style.css'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const WebBuild = () => {
  Header();
  Main();
  Footer();
  getPhotos("Coding");
}

const getPhotos = async (keyword) => {
  const data = await fetch(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_CLIENT_ID}&query=${keyword}&per_page=30`);
  const results = await data.json();
  const photos = results.results;
  printPhotos(photos);
};

const printPhotos = (photos) => {
  const container = document.querySelector("#results");
  const message = document.querySelector("#message");

  if (photos.length === 0) {
    container.innerHTML = "";
    message.textContent = "No se encontraron resultados. Intenta con otra búsqueda.";
    message.style.color = "red";
    message.style.fontSize = "2rem";
    message.style.textAlign = "center";
    message.style.marginTop = "4rem";
  } else {
    container.innerHTML = "";
    message.textContent = "Se han econtrado " + photos.length + " resultados";
    message.style.color = "red";
    message.style.fontSize = "2rem";
    message.style.textAlign = "center";
    message.style.marginTop = "1rem";
    message.style.marginBottom = "1rem";
    for (const photo of photos) {
      const li = document.createElement("li");
      li.innerHTML = `
      <img src="${photo.urls.regular}" alt="${photo.alt_description}">
      `
    container.appendChild(li);
  }
}};

WebBuild();

document.querySelector("#SearchButton").addEventListener("click", () => {
  const value = document.querySelector("#SearchInput").value;
  getPhotos(value);
});