/*
  Create a generator function called `getStop` which yields different stops on the trainline from Poughkeepsie to Grand Central Station.

  The stops are as follows:

  - Poughkeepsie
  - Newburgh
  - Peekskill
  - Yonkers
  - Bronx
  - Grand Central

  You will have a button with an id of `next-stop` that, when clicked, will console log the next stop or if the end of the line has been reached will console log "We made it!"
  
  WRITE YOUR SOLUTION HERE
*/

function* getStop() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}

const nycTrainline = getStop();
const nextStopButton = document.getElementById("next-stop");
nextStopButton.addEventListener("click", () => {
  let currStop = nycTrainline.next();
  if (currStop.done) {
    console.log("We made it!");
    nextStopButton.setAttribute("disabled", true);
  } else {
    console.log(currStop.value);
  }
});
