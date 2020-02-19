// Toolbar Functionalities
const $searchInput = document.querySelector("#search-font");
const $customText = document.querySelector("#custom-text");
const $fonts = document.querySelectorAll("article");
const $textPreview = document.querySelectorAll(".card-preview");
const $resetBtn = document.querySelector(".reset-button");
const $selectFont = document.querySelector("#font-size");

const SENTENCES = [
  "All their equipment and instruments are alive.",
  "A red flare silhouetted the jagged edge of a wing.",
  "I watched the storm, so beautiful yet terrific.",
  "Almost before we knew it, we had left the ground.",
  "My two natures had memory in common.",
  "The sky was cloudless and of a deep dark blue.",
  "The face of the moon was in shadow.",
  "Waves flung themselves at the blue evening.",
  "I watched the storm, so beautiful yet terrific.",
  "A shining crescent far beneath the flying vessel.",
  "My two natures had memory in common."
];

init();

function init() {
  filterFont();
  previewText();
  reset();
}

function reset() {
  $resetBtn.addEventListener("click", () => {
    returnDefaultText();
    returnDefaultFonts();
    $searchInput.value = "";
    $customText.value = "";
  });
}

// Filter Font
function filterFont() {
  $searchInput.addEventListener("keyup", e => {
    const search_input = e.target.value.toLowerCase();
    Array.from($fonts).forEach(font => {
      const $fontTitle = font.className.toLowerCase();
      if ($fontTitle.indexOf(search_input) !== -1) {
        font.style.display = "block";
      } else {
        font.style.display = "none";
      }
    });
  });
}

function returnDefaultFonts() {
  Array.from($fonts).forEach(font => {
    font.style.display = "block";
  });
}

// Type something
function previewText() {
  $customText.addEventListener("keyup", e => {
    const custom_word = e.target.value;
    Array.from($textPreview).forEach(text => {
      if (custom_word === "") {
        returnDefaultText();
        text.style.fontSize = "40px";
      } else {
        text.textContent = custom_word;
      }
    });
  });
}

function returnDefaultText() {
  for (let i = 0; i < $textPreview.length; i++) {
    $textPreview[i].textContent = SENTENCES[i];
  }
}

returnDefaultText();

//Font Size
$selectFont.addEventListener("change", () => {
  let fontValue = $selectFont.options[$selectFont.selectedIndex].value + "px";
  console.log(fontValue);
  Array.from($textPreview).forEach(text => {
    text.style.fontSize = fontValue;
  });
});

//Dark Theme

// Grid and List View

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
