/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Leslie Espino 
  Date: April 27th, 2026
  Filename: Script.js
*/

let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 6, isReserved: false },
  { tableNumber: 5, capacity: 8, isReserved: false },
];

function reserveTable(tableNumber, callback, time) {
  let table = tables.find(function (table) {
    return table.tableNumber === tableNumber;
  });

  if (!table) {
    callback("Error: That table does not exist.");
  } else if (table.isReserved) {
    callback("Error: Table " + tableNumber + " is already reserved.");
  } else {
    table.isReserved = true;

    setTimeout(function () {
      callback("Success! Table " + tableNumber + " has been reserved.");
    }, time);
  }
}

document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let tableNumber = Number(document.getElementById("tableNumber").value);
    let message = document.getElementById("message");

    if (name === "" || tableNumber === 0) {
      message.textContent = "Please enter your name and table number.";
      return;
    }

    message.textContent = "Checking reservation...";

    reserveTable(
      tableNumber,
      function (response) {
        message.textContent = name + ", " + response;
      },
      2000,
    );
  });
