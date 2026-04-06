/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Leslie Espino 
  Date: April 5th, 2026
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return characterClass;
    },
  };
}

document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  const character = createCharacter(name, gender, characterClass);

  document.getElementById("characterOutput").innerHTML = `
  <h2>Your Character</h2>
  <p><strong>Name:</strong> ${character.getName()}</p>
  <p><strong>Gender:</strong> ${character.getGender().charAt(0).toUpperCase() + character.getGender().slice(1)}</p>
  <p><strong>Class:</strong> ${character.getClass().charAt(0).toUpperCase() + character.getClass().slice(1)}</p>
`;
});
