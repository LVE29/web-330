"use strict";

const chefs = [
  { name: "Chef A", specialty: "Italian cuisine", location: "New York" },
  { name: "Chef B", specialty: "French cuisine", location: "Paris" },
  { name: "Chef C", specialty: "Japanese cuisine", location: "Tokyo" },
];

// AI added a shared variable to store the current chef
let currentChef = null;

function retrieveChef(index, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(chefs[index]), delay);
  });
}

async function displayChefs() {
  // AI starts all async operations at the same time
  const chefPromises = [
    retrieveChef(0, 600),
    retrieveChef(1, 900),
    retrieveChef(2, 1200),
  ];

  // Even though a shared variable is used,
  // the promises are still awaited in order,
  // so the output stays consistent

  const chef1 = await chefPromises[0];
  currentChef = chef1;

  document.getElementById("chef1").innerHTML = `<h2>${currentChef.name}</h2>
                                                <p>Specialty: ${currentChef.specialty}</p>
                                                <p>Location: ${currentChef.location}</p>`;

  const chef2 = await chefPromises[1];
  currentChef = chef2;

  document.getElementById("chef2").innerHTML = `<h2>${currentChef.name}</h2>
                                                <p>Specialty: ${currentChef.specialty}</p>
                                                <p>Location: ${currentChef.location}</p>`;

  const chef3 = await chefPromises[2];
  currentChef = chef3;

  document.getElementById("chef3").innerHTML = `<h2>${currentChef.name}</h2>
                                                <p>Specialty: ${currentChef.specialty}</p>
                                                <p>Location: ${currentChef.location}</p>`;
}

displayChefs();
