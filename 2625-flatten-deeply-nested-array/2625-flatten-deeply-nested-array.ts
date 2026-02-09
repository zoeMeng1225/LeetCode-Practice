type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    //base case: if depth 'n' is 0, no more flattening is needed.
    //return the array exactly as it is
    if(n === 0){
        return arr;
    }

    const result: MultiDimensionalArray = [];

    //iterate through each element of the array
    for(const item of arr){
        //check if the current item is an array and if still have depth quota
        if(Array.isArray(item) && n > 0){
            //make recursive: call flat() again with reduced depth(n - 1)
            //spread(...)the result to merge it into our current array
            result.push(...flat(item, n - 1))
        }else{
            //just push the item as is
            result.push(item)
        }
    }
    return result;
};