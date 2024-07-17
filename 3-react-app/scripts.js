const MAX_VALUE = 16;
const COLOR_ARRAY = ["bg-red", "bg-blue", "bg-green"];
const FONT_ARRAY = [
  "text-bold",
  "text-italic",
  "text-strike",
  "text-underline",
];

const $container = document.querySelector("#container");

const $setColorButton = document.querySelectorAll("#set-color-button");
const $colorInput = document.querySelector("#id-input"); //컬러 input

const $setTextButton = document.querySelectorAll("#set-text-button");
const $classInput = document.querySelector("#class-input"); //텍스트 스타일 input

const $resetButton = document.querySelector("#reset-button");
const $selectorInput = document.querySelector("#selector-input"); //selector input

const initArray = Array.from({ length: MAX_VALUE }, (_, index) => index + 1);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const pickRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const pickRandomColor = () => {
  return pickRandomValue(COLOR_ARRAY);
};

const pickRandomFontStyle = () => {
  return pickRandomValue(FONT_ARRAY);
};

const shuffledArray = shuffleArray(initArray);

shuffledArray.map((item) => {
  const div = document.createElement("div");
  div.id = "id-" + item;
  div.className = `item ${pickRandomColor()} ${pickRandomFontStyle()}`;
  div.innerHTML = item;
  $container.appendChild(div);
});

export const clickSetBackgroundColor = (e) => {
  const target = e.target;
  document.getElementById($colorInput.value).classList.remove(...COLOR_ARRAY);
  document.getElementById($colorInput.value).classList.add(target.value);
};

export const clickSetTextStyle = (e) => {
  const target = e.target;
  const allNumber = document.getElementsByClassName($classInput.value);
  Array.from(allNumber).forEach((item) => {
    item.classList.remove(...FONT_ARRAY);
    item.classList.add(target.value);
  });
};

export const clickReset = () => {
  const allSelector = document.querySelectorAll($selectorInput.value);
  allSelector.forEach((item) => {
    item.classList.remove(...COLOR_ARRAY);
    item.classList.remove(...FONT_ARRAY);
  });
};

$setColorButton.forEach((button) => {
  button.addEventListener("click", (e) => clickSetBackgroundColor(e));
});

$setTextButton.forEach((button) => {
  button.addEventListener("click", (e) => clickSetTextStyle(e));
});

$resetButton.addEventListener("click", () => clickReset());
