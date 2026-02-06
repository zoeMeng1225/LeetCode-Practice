interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    //initialize an empty object to store the grouped results
    const result:Record<string, any[]> = {};

    //interate over the array instance using 'this'
    //this refer to the array on which .groupBy() was called;
    for(const item of this){
        //calculate the key for current itrm using the callback function
        const key = fn(item);

        //if this key doesn't exist in the result object yet, initialize it with an enpty array
        if(!result[key]){
            result[key] = [];
        }

        //push the current item into the corresponding group array
        result[key].push(item);
    }

    return result;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */