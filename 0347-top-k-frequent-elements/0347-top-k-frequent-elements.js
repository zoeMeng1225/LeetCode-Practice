/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (const num of nums) {
    const currentCount = map.get(num) || 0;
    map.set(num, currentCount + 1);
  }

  //convert the map the 2d array
  const entires = Array.from(map.entries());
  const result = entires
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((e) => e[0]);

  return result;
};