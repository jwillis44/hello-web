const button = document.getElementById("helloButton");
let clicked = false;

button.addEventListener("click", function () {
  if (!clicked) {
    button.textContent = "You clicked me!";
    clicked = true;
  } else {
    button.textContent = "Click me";
    clicked = false;
  }
});