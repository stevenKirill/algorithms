// https://leetcode.com/problems/maximum-population-year/

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
  // let maxYear = findMaxlogs(logs);
  // let years = Array.from({ length: maxYear }).map(() => 0);
  let maxYear = Math.max(...logs.map(log => log[1]));
  let years = Array(maxYear).fill(0)
  for(let i = 0; i < logs.length; i++) {
    const [birth, death] = logs[i];
    for (let j = birth; j < death; j++) {
      years[j]++;
    }
  }
  let maxYearPopulation = Math.max(...years);
  // for (let i = 0; i < years.length; i++) {
  //   if (years[i] > maxYearPopulation) {
  //     maxYearPopulation = years[i];
  //   }
  // }
  return years.indexOf(maxYearPopulation);
};

// [
//   0, 1, 2, 2, 3, 4, 3, 2,
//   3, 4, 3, 3, 2, 2, 2, 1,
//   2, 2, 2, 2, 1, 1, 1
// ]


// console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]])); // 2


console.log(maximumPopulation([
  [5, 10],
  [2, 7],
  [4, 15],
  [1, 6],
  [9, 12],
  [8, 20],
  [16, 23],
]))
