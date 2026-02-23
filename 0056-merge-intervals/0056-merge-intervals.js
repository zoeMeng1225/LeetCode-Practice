/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    let temp = intervals[0];
    
    for(let i = 1; i < intervals.length; i++){
        const item = intervals[i];
        if(temp[1] >= item[0]){
            temp[1] = Math.max(temp[1], item[1]);
        }else{
            result.push(temp);
            temp = item;
            
        }
    }
    
    result.push(temp);
    return result;
};