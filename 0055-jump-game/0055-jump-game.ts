function canJump(nums: number[]): boolean {
    //logic，maintain a variable(fastest place can reach)
    //current index(position) + jump length(nums[i]) = last index(nums.length - 1)
    let maxReach = 0;
    const target = nums.length - 1;

    for(let i = 0; i < nums.length; i++){
        //if current i has exceeded max range, it means that it has been broken and can't be jumped over;
        if(i > maxReach) return false;

        //current position i(See if it was far before or far now)
        maxReach = Math.max(maxReach, i + nums[i]);

        if(maxReach >= target) return true;
    }
    return true
};