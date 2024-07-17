// scripts.js

export const MAX_VALUE = 16;
export const COLOR_ARRAY = ["bg-red", "bg-blue", "bg-green"];
export const FONT_ARRAY = [
  "text-bold",
  "text-italic",
  "text-strike",
  "text-underline",
];

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

export const clickSetBackgroundColor = (e) => {
  const target = e.target;
  const colorInputValue = document.getElementById('id-input').value;
  document.getElementById(colorInputValue).classList.remove(...COLOR_ARRAY);
  document.getElementById(colorInputValue).classList.add(target.value);
};

export const clickSetTextStyle = (e) => {
  const target = e.target;
  const classInputValue = document.getElementById('className-input').value;
  const allNumber = document.getElementsByClassName(classInputValue);
  Array.from(allNumber).forEach((item) => {
    item.classList.remove(...FONT_ARRAY);
    item.classList.add(target.value);
  });
};

export const clickReset = () => {
  const selectorInputValue = document.getElementById('selector-input').value;
  const allSelector = document.querySelectorAll(selectorInputValue);
  allSelector.forEach((item) => {
    item.classList.remove(...COLOR_ARRAY);
    item.classList.remove(...FONT_ARRAY);
  });
};

export const initArray = Array.from({ length: MAX_VALUE }, (_, index) => index + 1);
export const shuffledArray = shuffleArray(initArray);
// export const MAX_VALUE, COLOR_ARRAY, FONT_ARRAY;
