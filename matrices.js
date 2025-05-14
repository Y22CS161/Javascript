###Addition
<html>
<head>
<title>Addition of matrices</title>
</head>
<body>
<script>
let N = 4;
function add(A, B, C)
{
let i, j;
for (i = 0; i < N; i++)
for (j = 0; j < N; j++)
C[i][j] = A[i][j] + B[i][j];
}

let A = [ [4, 5, 1, 8],
[2, 5, 8, 9],
[3, 3, 3, 3],
[7, 8, 4, 5]];

let B = [ [4, 1, 8, 12],
[2, 2, 2, 2],
[11, 33, 38, 39],
[7, 5, 4, 2]];
let C = new Array(N);
for (let k = 0; k < N; k++)
C[k] = new Array(N);
let i, j;
add(A, B, C);
document.write("Result matrix is <br>");
for (i = 0; i < N; i++)
{
for (j = 0; j < N; j++)
document.write(C[i][j] + " ");
document.write("<br>");
}

</script>
</body>
</html>

###Multiplication
<html>
<head>
<title>Multiplication of Matrices</title>
</head>
<body>
<script>
const N = 4;
// This function multiplies mat1[][] and mat2[][], and stores the result in res[][]
function multiply(mat1, mat2, res)
{
    let i, j, k;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            res[i][j] = 0;
            for (k = 0; k < N; k++)
                res[i][j] += mat1[i][k] * mat2[k][j];
        }
    }
}
 
    let i, j;
    let res = new Array(N);
    for (let k = 0; k < N; k++)
        res[k] = new Array(N);
let mat1 = [ [ 10, 11, 16, 18 ],
                       [ 7, 5, 22, 24 ],
                       [ 8, 3, 9, 35 ],
                       [ 2, 4, 7, 8 ] ];
 
    let mat2 = [ [ 7, 5, 8, 9 ],
                       [ 7, 8, 22, 5 ],
                       [ 11, 4, 8, 7 ],
                       [ 7, 5, 9, 6 ] ];
 
    multiply(mat1, mat2, res);
   document.write("Result matrix is <br>");
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++)
            document.write(res[i][j] + " ");
        document.write("<br>");
    }
  </script>
</body>
</html>

