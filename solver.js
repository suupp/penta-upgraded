var pentas = [];



function checkEmptyCell(nx, ny, array) {
   if (array[nx][ny] == 1) return true; else return false
}

function firstEmptyCell(array) {
  for (var xx = 0; xx < array.length; xx=xx+1) {
    for (var yy = 0; yy < array[xx].length; yy=yy+1) {
      if (array[xx][yy] == 1) {
        return [xx,yy];
      }
     }
   }
   return false;
}

function drawFigure(sx, sy, figure, array) {
  i = Math.floor(Math.random()*63);
  fit = false;
  while (fit != 5) {
    figure[i].forEach(function(elem) {
      if ((sx+elem[0] > x-1) || (sx+elem[0] < 0) || (sy+elem[1] > y-1) || (sy+elem[1] < 0) || (array[sx+elem[0]][sy+elem[1]] == 0)) {
        i = Math.floor(Math.random()*63);
        fit = 0;
      } else { fit++ }
    });
  }
if (fit) {
  figure[i].forEach(function(elem) {
    console.log(figure[i]);
    fillRectUpd(sx+elem[0], sy+elem[1], cellWidth-1, cellHeight-1, 'black');
  });
  return true;
} else {
  return false;
}
}

function solve() {
curcell = firstEmptyCell(cellsArray);
   if (curcell != false) {
     placed = drawFigure(curcell[0], curcell[1], pentas, cellsArray);
   } else {
     console.log("done!");
   }
   if (!placed) {
     fillCanvas(cellsArray);
     solve();
   }
}


// fill in the array with pentomino figures per https://en.wikipedia.org/wiki/Pentomino#Symmetry

// 4 vaiations of L figure
pentas.push([[0,0], [1,0], [2,0], [3,0], [3,1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [-1,3]]);
pentas.push([[0,0], [0,1], [1,1], [2,1], [3,1]]);
pentas.push([[0,0], [1,0], [0,1], [0,2], [0,3]]);

// 4 vaiations of mirrored L figure
pentas.push([[0,0], [1,0], [2,0], [3,0], [3,-1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [1,3]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [0,1]]);
pentas.push([[0,0], [1,0], [1,1], [1,2], [1,3]]);


// 8 vaiations of F figure
pentas.push([[0,0], [1,0], [1,-1], [2,-1], [1,1]]);
pentas.push([[0,0], [0,1], [-1,1], [1,1], [1,2]]);
pentas.push([[0,0], [0,1], [1,1], [1,2], [2,1]]);
pentas.push([[0,0], [0,1], [1,1], [0,2], [-1,2]]);
pentas.push([[0,0], [1,0], [1,-1], [2,0], [0,1]]);
pentas.push([[0,0], [1,0], [1,1], [2,1], [1,2]]);
pentas.push([[0,0], [1,0], [1,1], [1,-1], [2,1]]);
pentas.push([[0,0], [1,0], [1,1], [2,0], [2,-1]]);

// 8 vaiations of N figure
pentas.push([[0,0], [0,-1], [0,-2], [1,0], [1,1]]);
pentas.push([[0,0], [1,0], [1,-1], [2,-1], [3,-1]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [3,-1]]);
pentas.push([[0,0], [0,1], [1,1], [1,2], [1,3]]);
pentas.push([[0,0], [1,0], [1,-1], [0,1], [0,2]]);
pentas.push([[0,0], [1,0], [2,0], [2,1], [3,1]]);
pentas.push([[0,0], [1,0], [1,1], [2,1], [3,1]]);
pentas.push([[0,0], [0,1], [1,0], [1,-1], [1,-2]]);

// 8 vaiations of P figure
pentas.push([[0,0], [1,0], [2,0], [0,1], [1,1]]);
pentas.push([[0,0], [1,0], [0,1], [1,1], [1,2]]);
pentas.push([[0,0], [1,1], [0,1], [0,1], [1,2]]);
pentas.push([[0,0], [1,0], [2,0], [1,-1], [2,-1]]);
pentas.push([[0,0], [0,-1], [0,-2], [1,-1], [1,-2]]);
pentas.push([[0,0], [1,0], [2,0], [1,1], [2,1]]);
pentas.push([[0,0], [1,0], [0,1], [1,1], [2,1]]);
pentas.push([[0,0], [0,1], [1,1], [1,0], [1,-1]]);

// 8 vaiations of Y figure
pentas.push([[0,0], [0,1], [0,2], [0,3], [1,2]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [1,1]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [2,-1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [-1,1]]);
pentas.push([[0,0], [1,0], [2,0], [3,0], [2,1]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [-1,2]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [1,1]]);
pentas.push([[0,0], [0,1], [-1,1], [1,1], [2,1]]);

// 4 vaiations of T figure
pentas.push([[0,0], [1,0], [2,0], [1,1], [1,2]]);
pentas.push([[0,0], [0,1], [0,2], [-1,2], [1,2]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [2,1]]);
pentas.push([[0,0], [0,1], [0,2], [1,1], [2,1]]);

// 4 vaiations of U figure
pentas.push([[0,0], [0,1], [1,1], [2,1], [2,0]]);
pentas.push([[0,0], [0,1], [1,0], [2,0], [2,1]]);
pentas.push([[0,0], [0,1], [0,2], [1,0], [1,2]]);
pentas.push([[0,0], [1,0], [1,1], [1,2], [0,2]]);

// 4 vaiations of V figure
pentas.push([[0,0], [0,1], [0,2], [1,2], [2,2]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [2,-2]]);
pentas.push([[0,0], [0,1], [0,2], [1,0], [2,0]]);
pentas.push([[0,0], [1,0], [2,0], [2,1], [2,2]]);

// 4 vaiations of W figure
pentas.push([[0,0], [0,1], [1,1], [1,2], [2,2]]);
pentas.push([[0,0], [1,0], [1,-1], [2,-1], [2,-2]]);
pentas.push([[0,0], [1,0], [1,1], [2,1], [2,2]]);
pentas.push([[0,0], [0,1], [1,0], [1,-1], [2,-1]]);

// 4 vaiations of Z figure
pentas.push([[0,0], [1,0], [1,1], [1,2], [2,2]]);
pentas.push([[0,0], [0,1], [0,2], [-1,2], [1,0]]);
pentas.push([[0,0], [1,0], [2,0], [2,-1], [0,1]]);
pentas.push([[0,0], [0,1], [1,1], [2,1], [2,2]]);

// 2 vaiations of I figure
pentas.push([[0,0], [1,0], [2,0], [3,0], [4,0]]);
pentas.push([[0,0], [0,1], [0,2], [0,3], [0,4]]);

// 1 vaiation of X figure
pentas.push([[0,0], [1,0], [2,0], [1,-1], [1,1]]);
