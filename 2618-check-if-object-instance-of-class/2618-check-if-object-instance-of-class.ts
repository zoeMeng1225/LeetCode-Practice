function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    //input validation: return false, if 'obj' is null or undefined, or if 'classFunction' is not a valid function.
    // Note: `obj === null` catches null, and `obj === undefined` catches undefined.
    if(obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }

    //get the target prototype(the DNA we are looking for)
    //prototype property of the constructor function
    const targetPrototype = classFunction.prototype;

    //get the initial prototype of the object;
    //use 'Object.getPrototypeOf()' instead of accessing '__proto__' diractly
    //key benifit: this method support primitive types(like 5, 'string') by automatically 'boxing' them whereas 'instanceof' would fail on primitives.
    let currentProto = Object.getPrototypeOf(obj);
    
    //traverse up the prototype chain
    while(currentProto !== null){
        //check if the current prototype matches the target
        if(currentProto === targetPrototype){
            return true;
        }
        
        //if not found, move one level up the prototype chain
        currentProto = Object.getPrototypeOf(currentProto)
    }

    //reached the end of the chain without finding a match
    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */