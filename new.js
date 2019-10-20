//convinient version of fillRect, this fills a rect with a particular color
function fillRectUpd(nx,ny,width,height,color) {
ctx.fillStyle = color;
ctx.fillRect(nx,ny,width,height);
}

//fill canvas cells according to an existing array values
function fillCanvas(array) {
  for (var xx = 0; xx < array.length; xx=xx+1) {
    for (var yy = 0; yy < array[xx].length; yy=yy+1) {
      if(array[xx][yy] == 1) {
         fillRectUpd(xx*cellWidth, yy*cellHeight, cellWidth-1, cellHeight-1, "white");
      } else if (array[xx][yy] == 0 ){
        fillRectUpd(xx*cellWidth, yy*cellHeight, cellWidth-1, cellHeight-1, "black");
      }
        else if (array[xx][yy] == 2){
        fillRectUpd(xx*cellWidth, yy*cellHeight, cellWidth-1, cellHeight-1, "red");
      } else if (array[xx][yy] == 3) {
        fillRectUpd(xx*cellWidth, yy*cellHeight, cellWidth-1, cellHeight-1, "green");
      } else {
        fillRectUpd(xx*cellWidth, yy*cellHeight, cellWidth-1, cellHeight-1, array[xx][yy]);
      }
     }
   }
}
function monitornApplySetChanges(set) {
  var node = document.getElementById('figPicker');
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  for (var ind = 0; ind < set.length; ind++) {
    var fig = document.createElement("canvas");
    fig.width = 150;
    fig.height = 150;
    console.log(set);
    fig.setAttribute("style",  "grid-column-start:${ind}; grid-row-start: 1");
    figctx = fig.getContext("2d");
      for (var j = 0; j < 5; j++) {
        figctx.fillRect(set[ind][j][0]*30, set[ind][j][1]*30, 29, 29);
    }
    node.appendChild(fig);
  }
}
function fillableCellCount(array) {
  count = 0;
  for (var xx = 0; xx < array.length; xx=xx+1) {
    for (var yy = 0; yy < array[xx].length; yy=yy+1) {
      if(array[xx][yy] == 1 || array[xx][yy] == 2 || array[xx][yy] == 3) {
        count++;
      }
     }
   }
   return count;
}
//function that checks if total amount of white cells is multiple to five and if canvas is not plain white or black
function checkAvailabilityOfCanvas(array) {
  multfive = true;
  total = 0;
  for (var xx = 0; xx < array.length; xx=xx+1) {
    for (var yy = 0; yy < array[xx].length; yy=yy+1) {
      if (array[xx][yy] == 3 || array[xx][yy] == 2) {
        total = total + 1;
      }
         total = total + array[xx][yy];
     }
   }
   if ((total % 5 != 0) || (total == 0) || (total == x*y)){
      multfive = false;
   }
   return multfive;
}

function clearGrid(array, needDraw) {
  for (var xx = 0; xx < array.length; xx=xx+1) {
    for (var yy = 0; yy < array[xx].length; yy=yy+1) {
      if ((array[xx][yy] != 1) && (array[xx][yy] != 0)) {
        array[xx][yy] = 1;
      }
     }
   }
   if (needDraw = true) {
     fillCanvas(array);
   }
}

//canvas reset function for making canvas color plain black to draw cells on it
function resetCanvas() {
fillRectUpd(0, 0, canvas.width, canvas.height, "black");
}

//function that sums values of 8 adjacent cells of particular cell
function countNeighbours(nx, ny, array) {
  var total = 0;
  for (var xx = nx-1; xx <= nx+1; xx=xx+1) {
    for (var yy = ny-1; yy <= ny+1; yy=yy+1) {
          if ((xx >= 0) && (yy >=0) && (xx < x) && (yy < y)){
              total = total + array[xx][yy];
          }
        }
     }
     total = total + Math.random()*(4)-2;
  return total;
}

function countNeighboursForSolve(nx, ny, array) {
  var total = 0;
  for (var xx = nx-1; xx <= nx+1; xx=xx+1) {
    for (var yy = ny-1; yy <= ny+1; yy=yy+1) {
          if ((xx >= 0) && (yy >=0) && (xx < x) && (yy < y)){
            if (array[xx][yy] != 0 && array[xx][yy] != 1) {
              total = total + 1;
            } else {
            total = total + array[xx][yy];
          }
          }
        }
     }
  return total;
}
//simple function to create 2d array for any purposes
function create2dArray(c, r) {
var newArray = new Array(c);
for (var i = 0; i < newArray.length; i++) {
  newArray[i] = new Array(r);
}
for (var xx = 0; xx < newArray.length; xx=xx+1) {
  for (var yy = 0; yy < newArray[xx].length; yy=yy+1) {
    newArray[xx][yy] = 0;
  }
}
return newArray;
}
