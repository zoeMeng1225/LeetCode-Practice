type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    //create a dictionary to store objects by ID for O(1) access.
    //key: id(number), value:the object(ArrayType)
    const combined:Record<number, ArrayType> = {};

    //add all items from arr1 to the dictionary
    for(const item of arr1){
        combined[item.id] = item;
    }

    //process arr2: merge if exists, add if new 
    for(const item of arr2){
        if(combined[item.id]){
            //if the id already exists, merge the properties.
            //using spread syntax (...), properties from 'item'(arr2) will overwrite combined[item.id](arr1)
            combined[item.id] = {...combined[item.id], ...item};
        }else{
            //if ID doesn't exist,just add it
            combined[item.id] = item;
        }
    }
    //convert the dirctory values back to an array
    const result = Object.values(combined);

    //sort the result by ID in ascending order(as required)
    result.sort((a, b) => a.id - b.id);

    return result;

};