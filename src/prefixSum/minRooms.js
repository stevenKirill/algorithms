const Rost = { name: "Ростов" };
const Ekb = { name: "Екатеринбург" };
const Spb = { name: "Санкт-Петербург" };
const Msk = { name: "Москва" };

const arr = [
  { name: "H", city: Rost },
  { name: "D", city: Ekb },
  { name: "A", city: Msk },
  { name: "B", city: Spb },
  { name: "C", city: Msk },
  { name: "E", city: Msk },
  { name: "F", city: Spb },
  { name: "G", city: Ekb },
];

function count(array) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i].city)) {
      const prev = map.get(array[i].city);
      map.set(array[i].city, prev + 1);
    } else {
      map.set(array[i].city, 1);
    }
  }
  return map;
}

console.log(count(arr));

// { Msk: 3, Spb: 2, Ekb: 2, Rost: 1 }
// O n * log N
function minRooms(rooms) {
  let diffs = new Map();
  for (const [from, to] of rooms) {
    const prevFrom = diffs.get(from) ?? 0;
    const prevTo = diffs.get(to) ?? 0;
    diffs.set(from, prevFrom + 1);
    diffs.set(to, prevTo - 1);
  }

  let sortedArray = [...diffs.keys()].sort((a, b) => a - b);

  let currentMeetings = 0;
  let maxResult = 0;
  for (const item of sortedArray) {
    currentMeetings += diffs.get(item);
    maxResult = Math.max(maxResult, currentMeetings)
  }
  return maxResult;
}

// 10 × 60 × 60 × 1000 = 36_000_000

// 36_000_000 × 8 = 288_000_000 byte = 288 MB

// console.time("xxx")
// // console.log(minRooms([
// //   [+new Date(2024, 0, 1, 0, 0, 0), +new Date(2024, 0, 1, 10, 0, 0)]
// // ]));

// Array(2 ** 25 + 1).fill(0); // 2 ** 20  * 2 ** 5 ≈ 32_000_000
// console.timeEnd("xxx")

// const { heapUsed } = process.memoryUsage();
// const actualSize = (heapUsed / 1e6).toFixed(2) + " MB";

// console.table({ actualSize });

// console.log(global.Number)
// console.log(global.process)
// console.log(global.global === global)

console.log(
  minRooms([
    [7, 10],
    [2, 6],
    [20, 23],
    [3, 7],
    [8, 15],
  ])
); // 2

//0 2  5  11 18 26 36  51  71  94 - prefix sum
// [2, 3, 6, 7, 8, 10, 15, 20, 23]

// В одной комнате, не мешая друг другу, могут проходить
// встречи [7, 10] и [3, 7], а в другой — [2, 6], [20, 23] и [8, 15].
// Вернуть необходимо минимальное количество комнат.

// Дан массив интервалов времени, обозначающих встречи. Необходимо определить минимальное количество комнат для того, чтобы провести все встречи.

// В каждый момент времени в комнате может проводиться только одна встреча.

// Каждая встреча задается полуинтервалом, левая граница времени включена, правая исключена.

// Например, если полуинтервал равен [3, 7], то встреча будет происходить в моменты втремени 3, 4, 5 и 6. В момент времени 7 комната доступна для следующей встречи.

// https://leetcode.com/problems/corporate-flight-bookings/description/
// https://leetcode.com/problems/car-pooling/description/
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/
