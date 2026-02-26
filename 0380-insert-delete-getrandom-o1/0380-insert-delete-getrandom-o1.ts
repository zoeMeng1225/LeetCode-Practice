class RandomizedSet {
    //use array and map, 
    //becuase only array can do Math.random(), and then ramdomly get value with O(1);
    //use Map to find out position of the certain number in the array at O(1);
    private nums:number[];
    private valToIndex: Map<number, number>

    constructor() {
        this.nums = [];
        this.valToIndex = new Map()
    }

    insert(val: number): boolean {
        //if the value already exists in the set, reture false;
        if(this.valToIndex.has(val)){
            return false;
        }

        //append the new value to end of the array
        this.nums.push(val);
        //store the value and its corresponding array index in the Map
        this.valToIndex.set(val, this.nums.length -1 )

        return true;
    }

    //logic: If use splice, all subsequent elements would be moved forward, and the time complexity is O(n)
    //so first, find out from the Map where the element is located in the array(index)
    //swap position of this element with the last element of the array
    //and use nums.pop() to pop it out(O(1))
    //update the new index of the original 'last element' recorded in the Map
    //remove the number want to remove from the Map
    remove(val: number): boolean {
        //if the value doesn't exist, there is nothing to remove, so return false;
       if(!this.valToIndex.has(val)){
        return false;
       }

        //retrive the index of the element to be removed
       const indexToRemove = this.valToIndex.get(val);
       
       //identify the last element in the array
       const lastEle = this.nums[this.nums.length -1];

       //the trick(swap strategy): overview the element to be removed with the last element
       this.nums[indexToRemove] = lastEle;

        //update the map to reflect the last element's new index
       this.valToIndex.set(lastEle, indexToRemove);

        //remove the last element from the array(O1 operation)
       this.nums.pop();

       //delete the target value from the map
       this.valToIndex.delete(val);
       
       return true;
    }

    getRandom(): number {
        //leverage the array for true (O)1 random access.
        let ramdomIndex = Math.floor(Math.random() * this.nums.length )
        return this.nums[ramdomIndex]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */