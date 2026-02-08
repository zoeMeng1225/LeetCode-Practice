type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        //check if values are equal
        toBe: (expected: any) => {
            if(val === expected){
                return true;
            }else{
                throw new Error('Not Equal')
            }
        },
        //check if values are not equal
        notToBe:(expected: any) => {
            if(val !== expected){
                return true;
            }else{
                throw new Error('Equal')
            }
        } 
    }

    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */