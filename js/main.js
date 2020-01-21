let slider = document.querySelector(".slider");
let fontSize = document.querySelector("#font-size option");

fontSize.innerHTML = slider.value + "px";

slider.oninput = function() {
  fontSize.innerHTML = this.value + "px";
  console.log(fontSize);
};

slider.addEventListener("mousemove", () => {
  let fontValue = slider.value;
  let percentage = (fontValue / 300) * 100;
  let color =
    "linear-gradient(90deg, rgb(223, 42, 42)" +
    percentage +
    "%, rgb(255,212,211)" +
    percentage +
    "%)";
  slider.style.background = color;
});
