// Slider Functionality

let $slider = document.querySelector("#slider");
let $font = document.querySelector("#font-size");
let $fontSize = document.querySelector("#font-size option");

$slider.oninput = function() {
  $fontSize.innerHTML = this.value + "px";
};

$font.onchange = () => {
  if ($font.value !== "8px") {
    let $fontOption = $font.value;
    $slider.value = $fontOption;
  }
  updateSlider();
};

$slider.addEventListener("mousemove", () => {
  updateSlider();
});

function updateSlider() {
  let fontValue = $slider.value;
  let percentage = (fontValue / 300) * 100;
  let color =
    "linear-gradient(90deg, rgb(223, 42, 42)" +
    percentage +
    "%, rgb(255,212,211)" +
    percentage +
    "%)";
  $slider.style.background = color;
}

// Responsive navigation
const smallScreens = window.matchMedia("screen and (max-width: 661px)");
const selectElement = element => document.querySelector(element);
const $body = selectElement("body");
const $headerNav = selectElement(".header-nav");
const $burger = selectElement(".header-menu-btn");

smallScreens.addListener(validation);

function validation(event) {
  if (event.matches) {
    $burger.addEventListener("click", hideShow);
  }
}

validation(smallScreens);

function hideShow() {
  $body.classList.toggle("is-active");
  $headerNav.classList.toggle("is-active");

  window.onclick = event => {
    if (event.target.className === "is-active") {
      $body.classList.remove("is-active");
      $headerNav.classList.remove("is-active");
    }
  };
}

// Filter Font
const $searchInput = document.querySelector(".input");
$searchInput.addEventListener("keyup", e => {
  const search_input = e.target.value.toLowerCase();
  const $fonts = document.querySelectorAll("article");
  Array.from($fonts).forEach(font => {
    const $fontTitle = font.className.toLowerCase();

    if ($fontTitle.indexOf(search_input) !== -1) {
      font.style.display = "block";
    } else {
      font.style.display = "none";
    }
  });
});
