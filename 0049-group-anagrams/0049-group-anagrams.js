/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for(const str of strs){
       const key = str.split('').sort().join('')
       const group = map.get(key) || []
       group.push(str)
       map.set(key, group)
    //    console.log(key, group)
    }

    return Array.from(map.values())
};