function removeDuplicates(nums: number[]): number {
    //corner case: if nums.length less than 2, if difinitely meet the requirements.just return length
    if(nums.length <= 2){
        return nums.length
    }

    //use 2 pointers
    //initialize the slow pointer
    let slow = 2;

    for(let fast = 2; fast < nums.length; fast++){
        //if the current element(fast point) is different from the element  
        //2 pointer behind the slow point(slow -2)

        //means the element hasn't exceeded the twice limit, so we can keep it
        if(nums[fast] !== nums[slow - 2]){
            nums[slow] = nums[fast];
            slow++
        }

        //if they are equel, it 3rd+ duplicate
        //we do nothing and let fast pointer continue to the next iteration
    }

    //after the loop, the slow pointer's index represents the length of the new vaild array;
    return slow; 
};


//if requires each unique element appear at most K times, we simply change the 2 to 'k'