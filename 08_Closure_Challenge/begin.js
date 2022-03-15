/*
  Create three buttons: blue, pink, and green. When each button is clicked, you should set the background of the document body to the selected color.
  WRITE YOUR SOLUTION HERE
*/

const changeColor = (color) => {
  return () => {
    document.body.style.backgroundColor = color;
  };
};

const blueBgColor = changeColor("#0f62fe");
const pinkBgColor = changeColor("#ff7eb6");
const greenBgColor = changeColor("#42be65");

document.getElementById("blue").addEventListener("click", blueBgColor);
document.getElementById("pink").addEventListener("click", pinkBgColor);
document.getElementById("green").addEventListener("click", greenBgColor);
