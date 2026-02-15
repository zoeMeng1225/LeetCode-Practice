function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if(obj === null || obj === undefined || typeof classFunction !== 'function'){
        return false;
    }

    const targetPrototype = classFunction.prototype;
    
    let currentProto = Object.getPrototypeOf(obj);
    
    while(currentProto !== null){
        if(currentProto === targetPrototype){
            return true;
        }

        currentProto = Object.getPrototypeOf(currentProto)
    }

    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */