import React, { useEffect } from 'react';
import './public/styles.css';
import {
  clickSetBackgroundColor,
  clickSetTextStyle,
  clickReset,
  shuffledArray,
  pickRandomColor,
  pickRandomFontStyle
} from './scripts';

const App = () => {
  useEffect(() => {
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
      <h1>Kernel360 Web Dev Base</h1>
      <div id="container" className="container"></div>
      <div id="input-container" className="input-container">
        <div className="input-section">
          <label htmlFor="id-input" className="input-label">
            ID
            <input type="text" id="id-input" />
          </label>
          <button onClick={clickSetBackgroundColor} value="bg-red">Set BG red</button>
          <button onClick={clickSetBackgroundColor} value="bg-green">Set BG green</button>
          <button onClick={clickSetBackgroundColor} value="bg-blue">Set BG blue</button>
        </div>
        <div className="input-section">
          <label htmlFor="className-input" className="input-label">
            Class
            <input type="text" id="className-input" />
          </label>
          <button onClick={clickSetTextStyle} value="text-bold">Set text bold</button>
          <button onClick={clickSetTextStyle} value="text-italic">Set text italic</button>
          <button onClick={clickSetTextStyle} value="text-strike">Set text strike</button>
          <button onClick={clickSetTextStyle} value="text-underline">Set text underline</button>
        </div>
        <div className="input-section">
          <label htmlFor="selector-input" className="input-label">
            Selector
            <input type="text" id="selector-input" />
          </label>
          <button onClick={clickReset}>Reset style</button>
        </div>
      </div>
    </>
  );
};

export default App;
