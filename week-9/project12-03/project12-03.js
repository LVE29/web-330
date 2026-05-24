"use strict";

/*
    Assignment 9.2
    Movie Collection Program

    Author: Leslie Espino
    Date: May 23, 2026
*/

const movies = [
  {
    title: "Interstellar",
    year: 2014,
    genre: "Science Fiction",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Coco",
    year: 2017,
    genre: "Animation",
  },
];

const loadButton = document.getElementById("loadBtn");
const movieContainer = document.getElementById("movieContainer");
const message = document.getElementById("message");

// Simulates retrieving movie data asynchronously without using shared global async variables
function fetchMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve(movies);
      } else {
        reject("Unable to load movie data.");
      }
    }, 2000);
  });
}

// async/await ensures movie data finishes loading before DOM updates occur
async function displayMovies() {
  movieContainer.innerHTML = "";
  message.textContent = "Loading movies...";

  try {
    const movieData = await fetchMovies();

    message.textContent = "Movies loaded successfully.";

    movieData.forEach((movie) => {
      const movieCard = document.createElement("div");

      movieCard.classList.add("movie-card");

      movieCard.innerHTML = `
                <h2>${movie.title}</h2>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Genre:</strong> ${movie.genre}</p>
            `;

      movieContainer.appendChild(movieCard);
    });
  } catch (error) {
    // Displays an error message if asynchronous data retrieval fails
    message.textContent = error;
  }
}

loadButton.addEventListener("click", displayMovies);
