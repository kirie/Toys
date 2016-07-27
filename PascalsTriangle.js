// Given the level, create pascals Triangle

function pascals (n) {
  let triangle = [[1]];
  let tier;
  for (let i = 0; i < n-1; i++) {
    tier = [1];
    for (let j = 1; j < triangle[i].length; j++) {
      tier[j] = triangle[i][j] + triangle[i][j-1];
    }
    tier.push(1);
    triangle.push(tier);
  }
  return triangle;
}

function pascalsRecursive (n, a) {
  if(n < 2){
    return a;
  }
  let previousT = a[a.length-1];
  let currentT = [1];

  for(let i = 1; i < previousT.length; i++) {
    currentT[i] = previousT[i] + previousT[i-1];
  }
  currentT.push(1);
  a.push(currentT);
  return pascalsRecursive(n-1, a);
}
