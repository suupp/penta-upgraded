figureSet = [];
function generateRandomGrid() {
  //created an array for storying cell values
cellsArray = create2dArray(x, y);
//reset canvas
resetCanvas();
//randomly filled the array with values 0 and 1 representing black(0) and white(1) cells when filling canvas
for (var xx = 0; xx < x; xx=xx+1) {
  for (var yy = 0; yy < y; yy=yy+1) {
    if (Math.random() > 0.5) {
    cellsArray[xx][yy] = 1;
          }
      }
   }
//smoothing the random spread of cells to make a solid structure of white fillable cells
for (var iter = 0; iter < 10; iter = iter + 1) {
for (var xx = 0; xx < x; xx=xx+1) {
  for (var yy = 0; yy < y; yy=yy+1) {
    //counting values of adjacent cells to see what to do with current cell, if > (some number) white cells then make(or remain) current cell white...
         neighbours = countNeighbours(xx, yy, cellsArray);
        if (neighbours > 4) {
          cellsArray[xx][yy] = 1;
        } else {
          cellsArray[xx][yy] = 0;
        }
     }
   }
 }
//checking if canvas is playable, if not - recursively try to generate grid again
  if (checkAvailabilityOfCanvas(cellsArray)) {
  //filled the canvas with white and black cells based on values in cellsArray
    fillCanvas(cellsArray);
    determineFigureSet(pentas, cellsArray);
    console.log(figureSet);
   } else {
    generateRandomGrid();
  }

}

function generateRectGrid() {

}
