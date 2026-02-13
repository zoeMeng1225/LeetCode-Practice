type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const result:T[]= [];
        let count = 0;

        if(functions.length === 0){
            resolve([]);
            return;
        }

        functions.forEach((item, index) => {
            Promise.resolve(item()).then(value => {
                result[index] = value;
                count++;

                if(count === functions.length){
                    resolve(result)
                }
            }).catch(err => reject(err))
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */