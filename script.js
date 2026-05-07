const themeButton = document.getElementById("themeButton"); //theme button
const button = document.getElementById("helloButton"); //click me button
let clicked = false; //click me default
// theme button
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

button.addEventListener("click", function () {
  if (!clicked) {
    button.textContent = "You clicked me!";
    clicked = true;
  } else {
    button.textContent = "Click me";
    clicked = false;
  }
});
// Theme button
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });