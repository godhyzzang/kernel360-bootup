import React, { useEffect } from 'react';
import './styles.css';

const MAX_VALUE = 16;
const COLOR_ARRAY = ["bg-red", "bg-blue", "bg-green"];
const FONT_ARRAY = [
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

const App = () => {
  useEffect(() => {
    const initArray = Array.from({ length: MAX_VALUE }, (_, index) => index + 1);
    const shuffledArray = shuffleArray(initArray);

    const container = document.querySelector('#container');
    shuffledArray.forEach((item) => {
      const div = document.createElement('div');
      div.id = `id-${item}`;
      div.className = `item ${pickRandomColor()} ${pickRandomFontStyle()}`;
      div.innerHTML = item;
      container.appendChild(div);
    });
  }, []);

  return (
    <>
      <p>This paragraph is a part of HTML.</p>
      <nav id="navigation"></nav>
      <p>This paragraph is also a part of HTML.</p>

      <h1>Kernel360 Web Dev Base</h1>
      <div id="container" className="container"></div>
      <div id="input-container" className="input-container">
        <div className="input-section">
          <label htmlFor="id-input" className="input-label">
            ID
            <input type="text" id="id-input" />
          </label>
          <button id="set-color-button" value="bg-red">Set BG red</button>
          <button id="set-color-button" value="bg-green">Set BG green</button>
          <button id="set-color-button" value="bg-blue">Set BG blue</button>
        </div>
        <div className="input-section">
          <label htmlFor="className-input" className="input-label">
            Class
            <input type="text" id="className-input" />
          </label>
          <button id="set-text-button" value="text-bold">Set text bold</button>
          <button id="set-text-button" value="text-italic">Set text italic</button>
          <button id="set-text-button" value="text-strike">Set text strike</button>
          <button id="set-text-button" value="text-underline">Set text underline</button>
        </div>
        <div className="input-section">
          <label htmlFor="selector-input" className="input-label">
            Selector
            <input type="text" id="selector-input" />
          </label>
          <button id="reset-button">Reset style</button>
        </div>
      </div>
    </>
  );
};

export default App;
