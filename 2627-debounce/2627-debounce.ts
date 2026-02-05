type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    //store the timer ID in the closure so it persists across function calls
    let timer:ReturnType<typeof setTimeout> | undefined;
    return function(...args) {
        const context = this;
        //if a timer is already running(previous call is pending)
        //reset the clock
        if(timer){
            clearTimeout(timer)
        }
        //set a new timer
        //the function fn will only excute if this timer completes without being cleared;
        timer = setTimeout(() => {
            fn.apply(context, args)
        },t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */