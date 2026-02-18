function jump(nums: number[]): number {
    let jumps = 0; //shows how many times it jumped
    let currentEnd = 0; //how many times you have jumped the boundary of the current jump (when you must jump)
    let maxReach = 0; //Maximum range

    //Only traverse up to nums.length - 2, 
    //because if you have reached the last cell, there is no need to jump any further
    for(let i = 0; i < nums.length -1; i++){
        maxReach = Math.max(maxReach, i + nums[i]);

        //Only increase the number of steps when you reach the "boundary" of the current jump
        if(i === currentEnd){
            jumps++;
            currentEnd = maxReach
        }
    }

    return jumps
};