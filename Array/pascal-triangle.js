var generate = function (numRows) {
  if (numRows <= 0) return [];

  let array = [];

  for (let i = 1; i <= numRows; i++) {
    let inLoopArray = [1];

    // Only run when previous row exists (i >= 3)
    if (i >= 3) {
      for (let j = 1; j < i - 1; j++) {
        inLoopArray[j] = array[i - 2][j - 1] + array[i - 2][j];
      }
    }

    // Last element
    if (i > 1) {
      inLoopArray[i - 1] = 1;
    }

    array.push(inLoopArray);
  }

  return array;
};
