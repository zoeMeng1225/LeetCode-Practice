/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length === 0) return [];

    intervals.sort((a,b)=> a[0] - b[0])

    const result = [intervals[0]]



    for(let i = 1; i < intervals.length; i++){
        const currentInterval = intervals[i];
        const lastMergedInterval = result[result.length -1];

        //check if it overlap, current starting < last merger interval
        if(currentInterval[0] <= lastMergedInterval[1]){
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1])
        }else{
            //if not overlap
            result.push(currentInterval)
        }
    }

    return result
};