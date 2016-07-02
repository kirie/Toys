// Given the level, create pascals Triangle

function pascals (n) {
  let triangle = [[1]]
  let tier
  for (let i = 0; i < n-1; i++) {
    let tier = [1]
    for (let j = 1; j < triangle[i].length; j++) {
      tier[j] = triangle[i][j] + triangle[i][j-1]
    }
    tier.push(1)
    triangle.push(tier)
  }
  return triangle
}
