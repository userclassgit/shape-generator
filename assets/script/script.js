import * as utils from './utils.js';
import * as Shape from './Shape.js';
'use strict';

const shapeSelection = utils.select('.shape-selection');
const colorSelection = utils.select('.color-selection');
const createButton = utils.select('.create-button');
const shapeBox = utils.select('.shape-box');

utils.listen('click', createButton, () => {
  const shapeType = shapeSelection.value; const shapeColor = colorSelection.value;

  let newShape;
  
  if (shapeType === 'circle') { 
    newShape = document.createElement('div'); 
    newShape.classList.add('circle'); 
  } else if (shapeType === 'square') { 
    newShape = document.createElement('div'); 
    newShape.classList.add('square'); 
  }
  
  newShape.style.backgroundColor = shapeColor;
  
  shapeBox.appendChild(newShape);
});
