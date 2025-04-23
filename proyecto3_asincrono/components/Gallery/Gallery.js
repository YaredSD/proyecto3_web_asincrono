import "./Gallery.css";

const template = () => `
    <h2 id="message"></h2>
    <ul id="results"></ul>
`

const listeners = () => {
    console.log(document.querySelector("#message"));
}

const Gallery = () => {
    document.querySelector("gallery").innerHTML = template(); 
    listeners();
};