/*
  Given a `<div id="clock"></div>` create a clock which displays the current hour, minutes, and seconds.

  ## Requirements

  - Use setInterval
  - Use Date()

  WRITE YOUR SOLUTION HERE
*/
const clock = () => {
  const element = document.getElementById("clock");
  return setInterval(() => {
    const date = new Date();
    const timer = date.toLocaleTimeString();
    element.textContent = timer;
  }, 1000);
};

clock();