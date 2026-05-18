/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Leslie Espino 
  Date: May 17, 2026
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: "2010",
    synopsis: "A thief enters dreams to steal information.",
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: "2014",
    synopsis: "A team travels through a wormhole to save humanity.",
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    year: "1999",
    synopsis: "A hacker discovers reality is a simulation.",
  },
];

async function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (m) => m.title.toLowerCase() === title.toLowerCase(),
      );

      if (movie) {
        resolve(movie);
      } else {
        reject("Movie not found");
      }
    }, 1000);
  });
}

function displayMovie(movie) {
  document.getElementById("movie-title").textContent = movie.title;

  document.getElementById("movie-director").textContent =
    `Director: ${movie.director}`;

  document.getElementById("movie-year").textContent = `Year: ${movie.year}`;

  document.getElementById("movie-synopsis").textContent =
    `Synopsis: ${movie.synopsis}`;

  document.getElementById("error-message").textContent = "";
}

document
  .getElementById("movie-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title-input").value.trim();

    try {
      const movie = await fetchMovie(title);

      displayMovie(movie);
    } catch (error) {
      document.getElementById("error-message").textContent = error;

      document.getElementById("movie-title").textContent = "";
      document.getElementById("movie-director").textContent = "";
      document.getElementById("movie-year").textContent = "";
      document.getElementById("movie-synopsis").textContent = "";
    }
  });
