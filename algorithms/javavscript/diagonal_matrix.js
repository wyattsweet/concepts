// Given a square matrix of size N x N calculate the absolute difference between the sums of its diagonals.

var a = [[ 1, 1, 1 ], 
         [ 1, 1, 1 ], 
         [ 1, 1, 1 ]]

var inner = 0,
    outer = a.length - 1,
    diag1 = 0,
    diag2 = 0;


for (var i = 0; i < a.length; i++) {
  diag1 = diag1 + a[i][inner];
  diag2 = diag2 + a[i][outer];

  inner++;
  outer--;
}

if (diag1 > diag2 || diag1 == diag2) console.log(diag1 - diag2);
if (diag1 < diag2) console.log(diag2 - diag1);
