import './style.css'
import {createApi} from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'umgdEkfCbnFxiTC0yln-zCxu1Mv8mxCeHuI3g5r4wws',
});

unsplash.search.getPhotos({
  query: Input.value,
  page: 1,
  perPage: 10,
}).then((result) => {
  if (result.errors) {
    console.log('Ha ocurrido un error con la búsqueda', result.errors[0]);
  } else {
    const photos = result.response.results;
    console.log(photos);
    const container = document.getElementById('app');
    photos.forEach(photo => {
      const img = document.createElement('img');
      img.src = photo.urls.small;
      container.appendChild(img);
    });
  }
});


/*const APIURL = "https://api.unsplash.com/search/photos";
const ACCESKEY = "umgdEkfCbnFxiTC0yln-zCxu1Mv8mxCeHuI3g5r4wws";
("?client_id=umgdEkfCbnFxiTC0yln-zCxu1Mv8mxCeHuI3g5r4wws&page=1&query=office");*/