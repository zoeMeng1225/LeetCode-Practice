
var RandomizedSet = function() {
    this.map = new Map();
    this.nums = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val))return false;

    this.nums.push(val);
    this.map.set(val, this.nums.length-1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
 //[10, 20,30], remove(20)
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)) return false;

    const index = this.map.get(val) // find the index of value
    const lastNum = this.nums.pop(); // find the last index
    if(val !== lastNum){
        this.nums[index] = lastNum; //[10, 30]
        this.map.set(lastNum, index); // [10->0, 20->1, 30 -> 1]
    }

    this.map.delete(val)
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    //use math.floor(): round down and return a interger
    //and math.random() return a random number
    const randomNumber = Math.floor(Math.random() * this.nums.length);
    return this.nums[randomNumber]

};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */