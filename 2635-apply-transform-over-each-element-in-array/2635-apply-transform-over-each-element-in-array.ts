function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    //create a new array to store the result
    const result: number[] = [];

    for(let i = 0; i < arr.length; i++){
        //pass the current element and its index
        const transformedValue = fn(arr[i], i);

        //push the transformed value into the result array
        result.push(transformedValue)
    }
    return result
};
