type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    //store the dynamic value in the spareate variable current
    let current = init;
    return {
        increment:() => ++current,
        decrement:() => --current,
        reset:() => {
            current = init
            return current
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */