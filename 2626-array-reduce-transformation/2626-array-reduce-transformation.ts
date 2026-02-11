type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result: number = init;

    nums.forEach(current => {
        result = fn(result, current);
    })

    return result;
};