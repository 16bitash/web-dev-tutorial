// Iterating an array
const array = [1, 2, 3, 4, 5, 6];

function logArrayItems(arr) {
  let i = 0;
  while (i <= arr.length - 1) {
    console.log(arr[i]);
    i = i + 1;
  }
}

logArrayItems(array);

// Printing star square pattern
function starSquare(n) {
  let i = 0;
  while (i <= n - 1) {
    let lineString = '';

    let j = 0;
    while (j <= n - 1) {
      lineString = lineString + '*';
      j = j + 1;
    }
    console.log(lineString);

    console.log('');

    i = i + 1;
  }
}

starSquare(20);
