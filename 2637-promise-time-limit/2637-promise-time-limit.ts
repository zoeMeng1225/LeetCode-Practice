type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            //set up the timeout mechanism(the time limit)
            //if the time 't' passes before the function complete
            const timeoutId = setTimeout(() => {
                reject('Time Limit Exceeded')
            },t);

            //excute the original async function
            fn(...args).then(res => {
                //if the function completes successful whthin the time limit:
                //clear the timeout to prevent rejection and resolve with the result;
                clearTimeout(timeoutId);
                resolve(res)
            }).catch(err => {
                //if the function fails within the time limit:
                //clear the timeout and propagate the original error
                clearTimeout(timeoutId);
                reject(err);
            })
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */