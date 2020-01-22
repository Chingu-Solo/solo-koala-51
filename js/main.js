let slider = document.querySelector("#slider");
let font = document.querySelector("#font-size");
let fontSize = document.querySelector("#font-size option");

slider.oninput = function() {
  fontSize.innerHTML = this.value + "px";
};

font.onchange = () => {
  if (font.value !== "8px") {
    let fontOption = font.value;
    slider.value = fontOption;
  }
  updateSlider();
};

slider.addEventListener("mousemove", () => {
  updateSlider();
});

function updateSlider() {
  let fontValue = slider.value;
  let percentage = (fontValue / 300) * 100;
  let color =
    "linear-gradient(90deg, rgb(223, 42, 42)" +
    percentage +
    "%, rgb(255,212,211)" +
    percentage +
    "%)";
  slider.style.background = color;
}
