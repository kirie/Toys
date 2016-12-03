
function sortScores(arr, max) {
  const scores = new Array(max + 1);
  const sorted = [];

  arr.forEach((v) => {
    scores[v] = ++scores[v] || 1;
  });

  scores.forEach((v, i) => {
    let instances = v;
    while (instances > 0) {
      sorted.push(i);
      instances--;
    }
  });
  return sorted;
}