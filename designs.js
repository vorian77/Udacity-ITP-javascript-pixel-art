/*
Pixel Art Maker...
User configures size of grid and color.
When a grid element is clicked, it's color
changes to the selected color.
*/


// reference page objects
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const inputSubmit = document.querySelector('input[type="submit"]');
const colorPicker = document.getElementById('colorPicker');
const grid = document.getElementById('pixelCanvas');


// create event listener that creates a new
// grid based on the users specifications when
// the submit button is clicked
inputSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  makeGrid();
});


function makeGrid() {
  // set grid parmeters
  const gridW = parseInt(inputWidth.value);
  const gridH = parseInt(inputHeight.value);

  // if grid has a body, delete it to effectively remove the existing grid
  const oldBody = grid.firstElementChild;
  if (oldBody !== null) {
    oldBody.remove();
  }

  // start grid creation by creating body tag
  const newBody = document.createElement('tbody');
  grid.appendChild(newBody);

  for (let row = 0; row < gridH; row++) {
    // add rows to body
    const newRow = document.createElement('tr');
    newBody.appendChild(newRow);

    for (let col = 0; col < gridW; col++) {
      // add columns to the row
      const newCol = document.createElement('td');
      newRow.appendChild(newCol);

      // add event listener that changes color of column
      // element when it's clicked
      newCol.addEventListener('click', function (event) {
        const newColor = colorPicker.value;
        event.target.style.backgroundColor = newColor;
      });
    }
  }
}
