// https://leetcode.com/problems/unique-paths/

// Robot Paths.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

'use strict';

const uniquePaths = function(m, n) {
  let result = [];
  let baserow = [];

  // create a base row of 1's
  for(let i = 0; i < n;i++){
    baserow.push(1);
  }
  result.push(baserow);
  
  // create subsequent rows.  This is similar to Pascals Triangle, adding the previous row and the last element
  for(let i = 0; i < m-1; i++) {
    let row = [1];
    for(let j = 1;j < result[i].length;j++){
      row[j] = row[j-1]+ result[i][j];
    }
    result.push(row);
  }
  // return the last element in our matrix
  return result[m-1][n-1]; 
};

console.log(uniquePaths(3,7));
