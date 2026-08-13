
var RandomizedSet = function() {
  this.nums = [];
  this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;

  this.nums.push(val);
  this.map.set(val, this.nums.length - 1);
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
     if (!this.map.has(val)) return false;

  let index = this.map.get(val); //find the index of val
  //find the last number for 填坑到要删除的位置
  let lastNum = this.nums.pop();

  if (val !== lastNum) {
    this.nums[index] = lastNum;
    this.map.set(lastNum, index);
  }

  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
      const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */