/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0, prefixSum = 0;
    const map = new Map();
    map.set(0, 1);

    for(const num of nums){
        prefixSum += num;
        const target = prefixSum - k
        if(map.has(target)){
            count += map.get(target)
        }

        const freq = map.get(prefixSum) || 0;
        map.set(prefixSum, freq + 1);
    }

    return count;
};