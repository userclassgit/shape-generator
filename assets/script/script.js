import * as utils from './utils.js';
import Shape from './Shape.js';
'use strict';

const shapeSelection = utils.select('.shape-selection');
const colorSelection = utils.select('.color-selection');
const createButton = utils.select('.create-button');
const shapeBox = utils.select('.shape-box');

let shapes = [];

utils.listen('click', createButton, () => {
  const shapeType = shapeSelection.value;
  const shapeColor = colorSelection.value;

  if (shapes.length < 35) { //if shapeBox isn't full, add a new shape
    let newShapeInstance = new Shape(shapeType, shapeColor);
    shapes.push(newShapeInstance);

    let newShape = document.createElement('div');
    newShape.classList.add(newShapeInstance.name);
    newShape.style.backgroundColor = newShapeInstance.colour;

    shapeBox.appendChild(newShape);
  }
});





// utils.listen('click', createButton, () => {
//   const shapeType = shapeSelection.value; const shapeColor = colorSelection.value;

//   let newShape;
  
//   if (shapeType === 'circle') { 
//     newShape = document.createElement('div'); 
//     newShape.classList.add('circle'); 
//   } else if (shapeType === 'square') { 
//     newShape = document.createElement('div'); 
//     newShape.classList.add('square'); 
//   }
  
//   newShape.style.backgroundColor = shapeColor;
  
//   shapeBox.appendChild(newShape);
// });
