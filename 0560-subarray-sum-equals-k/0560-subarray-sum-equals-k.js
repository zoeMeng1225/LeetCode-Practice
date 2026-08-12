/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    //use map to store the key-value pair like this:
    //nums = [1,2,3], k = 3, the map should look like this
    //[3, 1+2], [3, 3], so the output should be 2, becuase there are totle 2 nums that added to 3.

    //we need find the sum of contiguos numbers is k. 
    //store total number of valid subarrays
    let count = 0;
    let prefixSum = 0;
    const map = new Map();
    //initialize: prefix sum 0 appear 1 time by defualt
    map.set(0, 1)
    for(const num of nums){
        //add the current number
        prefixSum += num;
        const target = prefixSum - k 
        if(map.has(target)){
            count+=map.get(target)
        }
        
        const freq = map.get(prefixSum) || 0;
        map.set(prefixSum, freq +1) // added current time
    }

    return count
};