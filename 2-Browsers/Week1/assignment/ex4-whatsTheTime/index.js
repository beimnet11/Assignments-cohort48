'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const divElement = document.createElement('div')
divElement.id = 'current-time';
document.body.appendChild(divElement);


function addCurrentTime() {
  // TODO complete this function
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes(); 
  const seconds = currentTime.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`;
  divElement.textContent = time;



}

setInterval(addCurrentTime, 1000);

window.addEventListener('load', addCurrentTime);
// TODO execute `addCurrentTime` when the browser has completed loading the page
