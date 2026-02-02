function longestConsecutive(nums: number[]): number {
    //create a set(O1 lookups)
    const numSet = new Set(nums)
    let longestStreak = 0;

    for(const num of numSet){
        //check if 'num' is the start of a sequence
        //we only start count if (num - 1) is not in the set
        if(!numSet.has(num - 1)){
            let currentNum = num;
            let currentStreak = 1;

            //count how many consecutive numbers follow
            while(numSet.has(currentNum + 1)){
                currentNum += 1;
                currentStreak += 1
            }

            //update the global maximum
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak
};