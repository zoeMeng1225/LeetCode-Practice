type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {

    let result: number[] = [];
    arr.forEach((n, i) => {
        if(fn(n, i)){
            result.push(n);
        }
    })

    return result;
};