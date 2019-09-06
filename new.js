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
      } else {
        fillRectUpd(xx*cellWidth, yy*cellHeight, cellWidth-1, cellHeight-1, "black");
        }
     }
   }
}

//function that checks if total amount of white cells is multiple to five and if canvas is not plain white or black
function checkAvailabilityOfCanvas(array) {
  multfive = true;
  total = 0;
  for (var xx = 0; xx < array.length; xx=xx+1) {
    for (var yy = 0; yy < array[xx].length; yy=yy+1) {
         total = total + array[xx][yy];
     }
   }
   if ((total % 5 != 0) || (total == 0) || (total == x*y)){
      multfive = false;
   }
   console.log(total);
   return multfive;
}

//canvas reset function for making canvas color plain black to draw cells on it
function resetCanvas() {
fillRectUpd(0, 0, canvas.width, canvas.height, "black");
}

//function that sums values of 8 adjacent cells of particular cell
function countNeighbours(nx, ny, array) {
  total = 0;
  for (var xx = nx-1; xx <= nx+1; xx=xx+1) {
    for (var yy = ny-1; yy <= ny+1; yy=yy+1) {
          if ((xx >= 0) && (yy >=0) && (xx < x) && (yy < y)){
              total = total + array[xx][yy];
            }
        }
     }
     total = total + Math.random()*(4)-2
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
