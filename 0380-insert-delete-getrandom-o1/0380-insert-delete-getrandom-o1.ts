class RandomizedSet {
    private nums:number[];
    private valToIndex: Map<number, number>

    constructor() {
        this.nums = [];
        this.valToIndex = new Map()
    }

    insert(val: number): boolean {
        if(this.valToIndex.has(val)){
            return false;
        }

        this.nums.push(val);
        this.valToIndex.set(val, this.nums.length -1 )
        return true;
    }

    remove(val: number): boolean {
       if(!this.valToIndex.has(val)){
        return false;
       }

       const indexToRemove = this.valToIndex.get(val);
       const lastEle = this.nums[this.nums.length -1];
       this.nums[indexToRemove] = lastEle;

       this.valToIndex.set(lastEle, indexToRemove);
       this.nums.pop();
       this.valToIndex.delete(val);
       
       return true;
    }

    getRandom(): number {
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