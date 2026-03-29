"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Leslie Espino
      Date: March 29th, 2026

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Constructor
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// runPause method
timer.prototype.runPause = function (timer, minBox, secBox) {
  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds--;
    } else if (timer.minutes > 0) {
      timer.minutes--;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }

  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(countdown, 1000);
  }
};

/*---------------Interface Code -----------------*/

// Get elements
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseButton = document.getElementById("runPauseButton");

// Create timer
let myTimer = new timer(parseInt(minBox.value), parseInt(secBox.value));

// Sync inputs
minBox.onchange = function () {
  myTimer.minutes = parseInt(minBox.value);
};

secBox.onchange = function () {
  myTimer.seconds = parseInt(secBox.value);
};

// Button click
runPauseButton.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
