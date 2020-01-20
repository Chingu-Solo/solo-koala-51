let slider = document.querySelector("#range");
let output = document.querySelector("#font-size option");

output.innerHTML = slider.value + "px";

slider.oninput = function() {
  output.innerHTML = this.value + "px";
};

slider.addEventListener("mousemove", () => {
  let x = slider.value;
  let color =
    "linear-gradient(90deg, rgb(223, 42, 42)" +
    x +
    "%, rgb(255,212,211)" +
    x +
    "%)";
  slider.style.background = color;
});

