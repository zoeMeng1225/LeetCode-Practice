type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    //handle array
    if(Array.isArray(obj)){
        const result: JSONValue[] = [];
        for(const item of obj){
            //filter out falsy values(false, 0, null, undefined, NaN, "")
            if(item){
                if(typeof item === 'object'){
                    result.push(compactObject(item as Obj))
                }else{
                    result.push(item)
                }
            }
        }
        return result as Obj
    }

    //handle object
    const result: Obj = {};
    for(const key in obj){
        const val = obj[key];

        if(val){
            if(typeof val === 'object'){
                //recursive call for nested object/arrays
                result[key] = compactObject(val)
            }else{
                result[key] = val;
            }
        }
    }
      return result as Obj
}