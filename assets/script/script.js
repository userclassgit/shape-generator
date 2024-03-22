import * as utils from './utils.js';
import Shape from './Shape.js';
'use strict';

const shapeSelection = utils.select('.shape-selection');
const colorSelection = utils.select('.color-selection');
const createButton = utils.select('.create-button');
const shapeBox = utils.select('.shape-box');
const shapeInfo = utils.select('.shape-info');
const shape = utils.select('.shape');

let shapes = [];

utils.listen('click', createButton, () => {
  const shapeType = shapeSelection.value;
  const shapeColorName = colorSelection.options[colorSelection.selectedIndex].text.toLowerCase();

  if (shapes.length < 35) { //if shapeBox isn't full, add a new shape
    let newShapeInstance = new Shape(shapeType, shapeColorName);
    shapes.push(newShapeInstance);

    let newShape = document.createElement('div');
    newShape.classList.add(newShapeInstance.name, 'shape');
    newShape.style.backgroundColor = colorSelection.value;

    // this updates shapeInfo when a shape is clicked
    utils.listen('click', newShape, () => {
      const shapeIndex = shapes.indexOf(newShapeInstance);
      shapeInfo.style.visibility = 'visible';

      shapeInfo.textContent = `Unit ${shapeIndex + 1}: ${shapes[shapeIndex].getInfo()}`;
    });

    shapeBox.appendChild(newShape);
  }
});