import peliculas from "./peliculas.js";

console.log(peliculas);

//filtrado por genero

const genAction = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(28)
);
const genThriller = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(53)
);
const genAdventure = peliculas.filter((pelicula) =>
  pelicula.genre_ids.includes(12)
);

console.log(genAction);
console.log(genThriller);
console.log(genAdventure);

//obtener los contenedores por generos

const genActionHTML = document.getElementById("genero-28");
const genThrillerHTML = document.getElementById("genero-53");
const genAdventureHTML = document.getElementById("genero-12");

//iteracion de ACCION

genAction.forEach((peliculas) => {
  //modificacion del DOM
  const filmDiv = document.createElement("div");
  const filmImg = document.createElement("img");
  const filmTitle = document.createElement("h4");

  //añadir imagen al div
  filmImg.src = "https://image.tmdb.org/t/p/w500" + peliculas.poster_path;
  filmDiv.appendChild(filmImg);

  //añadir texto al div
  filmTitle.innerText = peliculas.title;
  filmDiv.appendChild(filmTitle);

  //añadir el div al contenedor
  genActionHTML.appendChild(filmDiv);
});

//iteracion de THRILLER

genThriller.forEach((peliculas) => {
  //modificacion del DOM
  const filmDiv = document.createElement("div");
  const filmImg = document.createElement("img");
  const filmTitle = document.createElement("h4");

  //añadir imagen al div
  filmImg.src = "https://image.tmdb.org/t/p/w500" + peliculas.poster_path;
  filmDiv.appendChild(filmImg);

  //añadir texto al div
  filmTitle.innerText = peliculas.title;
  filmDiv.appendChild(filmTitle);
  genThrillerHTML.appendChild(filmDiv);

  //añadir el div al contenedor
  genThrillerHTML.appendChild(filmDiv);
});

//iteracion de AVENTURAS

genAdventure.forEach((peliculas) => {
  //modificacion del DOM
  const filmDiv = document.createElement("div");
  const filmImg = document.createElement("img");
  const filmTitle = document.createElement("h4");

  //añadir imagen al div
  filmImg.src = "https://image.tmdb.org/t/p/w500" + peliculas.poster_path;
  filmDiv.appendChild(filmImg);

  //añadir texto al div
  filmTitle.innerText = peliculas.title;
  filmDiv.appendChild(filmTitle);

  //añadir el div al contenedor
  genAdventureHTML.appendChild(filmDiv);
});
