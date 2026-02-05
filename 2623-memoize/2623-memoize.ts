type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    //initialize the cache to store results
    //key: serialized string; value: function result;
    const cache = new Map<string, any>

    return function(...args) {
        //generate a unique key based on the current arguments
        //use JSON.stringify to distinguish between diffrent inputs(e.g., [2,3] vs [3,2])
        const key = JSON.stringify(args);

        //check the cache: if the result for these arguments already exists,return immediately
        if(cache.has(key)){
            return cache.get(key)
        }

        //if not in cache: execute the original function to get the result.
        const result = fn(...args)

        //cache the result: store it in the mao for feture function calls
        cache.set(key, result);

        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */