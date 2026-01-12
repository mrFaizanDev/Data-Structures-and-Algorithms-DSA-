// This function modifies the given matrix in-place to set entire rows and columns to zero
// if any element in the matrix is zero. It uses the first row and column as markers
// to minimize space complexity.

// Approach:
// 1. Use the first row and first column of the matrix as markers to record which rows and columns should be set to zero.
// 2. First, scan the first row and column to check if they originally contain any zeros.
// 3. Then update the matrix based on these markers.
// 4. Finally, zero out the first row and/or column if needed.

// Complexity:
// Time Complexity: O(m × n), where m is the number of rows and n is the number of columns.
// Space Complexity: O(1), as we are modifying the matrix in-place without using extra space.

var setZeroes = function (matrix) {
  const rowLength = matrix.length; // Number of rows in the matrix
  const colLength = matrix[0].length; // Number of columns in the matrix

  let isFirstRowHasZero = false; // Flag to check if the first row contains any zero
  let isFirstColumnHasZero = false; // Flag to check if the first column contains any zero

  // Check if the first row contains any zero
  for (let j = 0; j < colLength; j++) {
    if (matrix[0][j] === 0) {
      isFirstRowHasZero = true;
      break;
    }
  }

  // Check if the first column contains any zero
  for (let i = 0; i < rowLength; i++) {
    if (matrix[i][0] === 0) {
      isFirstColumnHasZero = true;
      break;
    }
  }

  // Use the first row and column as markers
  for (let i = 1; i < rowLength; i++) {
    for (let j = 1; j < colLength; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // Mark the first cell of the row
        matrix[0][j] = 0; // Mark the first cell of the column
      }
    }
  }

  // Update the matrix based on the markers
  for (let i = 1; i < rowLength; i++) {
    for (let j = 1; j < colLength; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0; // Set the cell to zero
      }
    }
  }

  // If the first row originally had any zero, set all its columns to zero
  if (isFirstRowHasZero) {
    for (let j = 0; j < colLength; j++) {
      matrix[0][j] = 0;
    }
  }

  // If the first column originally had any zero, set all its rows to zero
  if (isFirstColumnHasZero) {
    for (let i = 0; i < rowLength; i++) {
      matrix[i][0] = 0;
    }
  }
};
