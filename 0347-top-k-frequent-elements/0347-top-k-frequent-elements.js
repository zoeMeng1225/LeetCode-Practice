/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //create a map to store how many time for each element appeared.
    let map = new Map();
    for(const num of nums){
        const currentCount = map.get(num) || 0;
        map.set(num, currentCount+1);
    }
    //covert the map a 2D array
    const entries = Array.from(map.entries());
    //sort the array to descedning order based on frequency
    entries.sort((a, b) => b[1] - a[1])
    return entries.slice(0, k).map(e => e[0])


};