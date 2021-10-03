// Random Color Generator

// set initial count
let count = 0;

// add variables
const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

// add general forEach loop to read the multiple buttons
btns.forEach(function (btn) {
  // addd event listener
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    // if statement
    if (style.contains("increase")) {
      count++;
    } else if (style.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    // add textContent so the count value shows when buttons are pushed
    value.textContent = count;
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "blue";
    }
  });
});
