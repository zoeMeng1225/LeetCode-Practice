type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    //iterate over the object's key using a for-in loop
    for(const key in obj){
        return false; //if we enter the loop, it means there is at lease one key/ele
    }
    return true; // if the loop finishes without executing the body, no keys were found
};