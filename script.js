const themeButton = document.getElementById("themeButton"); //theme button
const button = document.getElementById("helloButton"); //click me button
const resetCounterButton = document.getElementById("resetCounterButton"); //reset counter button
const clickCountText = document.getElementById("clickCount"); //click counter text
let clicked = false; //click me default
let clickCount = Number(localStorage.getItem("clickCount")) || 0;
clickCountText.textContent = "Click count: " + clickCount;
// theme button
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

button.addEventListener("click", function () {
  clickCount += 1;
  clickCountText.textContent = "Click count: " + clickCount;
  localStorage.setItem("clickCount", clickCount);

  if (!clicked) {
    button.textContent = "You clicked me!";
    clicked = true;
  } else {
    button.textContent = "Click me";
    clicked = false;
  }
});

resetCounterButton.addEventListener("click", function () {
  clickCount = 0;
  clickCountText.textContent = "Click count: " + clickCount;
  localStorage.setItem("clickCount", clickCount);
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