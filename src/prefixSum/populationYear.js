// https://leetcode.com/problems/maximum-population-year/

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulationBF = function(logs) {
  let maxYear = Math.max(...logs.map(log => log[1]));
  let years = Array(maxYear).fill(0);
  for(let i = 0; i < logs.length; i++) {
    const [birth, death] = logs[i];
    for (let j = birth; j < death; j++) {
      years[j]++;
    }
  }
  let maxYearPopulation = Math.max(...years);
  return years.indexOf(maxYearPopulation);
};

// [
//   0, 1, 2, 2, 3, 4, 3, 2,
//   3, 4, 3, 3, 2, 2, 2, 1,
//   2, 2, 2, 2, 1, 1, 1
// ]


// console.log(maximumPopulationBF([[1950,1961],[1960,1971],[1970,1981]])); // 2


// console.log(maximumPopulationBF([
//   [5, 10],
//   [2, 7],
//   [4, 15],
//   [1, 6],
//   [9, 12],
//   [8, 20],
//   [16, 23],
// ]));

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  let max = Math.max(...logs.map(log => log[1]));
  let min = logs.reduce((acc, log) => Math.min(acc, log[0]), Infinity);
  let diffs = Array(max - min + 1).fill(0);
  for(const [b, d] of logs) {
    diffs[b - min]++;
    diffs[d - min]--;
  }
  let prexifSum = 0;
  let maxResult = 0;
  let index = 0;
  let maxIndex = 0;
  for(const diff of diffs) {
    prexifSum += diff;
    if (prexifSum > maxResult) {
      maxResult = prexifSum;
      maxIndex = index;
    }
    index++;
  }
  return maxIndex + min;
};

// [                  !~
//   1, 1,  0, 0,  1,  1, -1,
//   1, 0,  0, 0, -1,  0, -1,
//   0, 0, -1, 0,  0, -1
// ]

console.log(maximumPopulation([
  [5, 10], //
  [12, 17],
  [4, 15],
  [11, 16],
  [9, 12],
  [8, 20],
  [16, 23],
]));
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//
/// https://magma.com/d/0FOKS5vSDu
