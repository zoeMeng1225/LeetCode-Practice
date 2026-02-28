function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    //create the result array and initialize it with 1s.
    const answer = new Array(n).fill(1)

    //pass 1: calculate the product of all elements to the Left of eaah index
    let leftProduct = 1;
    for(let i = 0; i < n; i++){
        answer[i] = leftProduct; //store the left product so far.
        leftProduct *= nums[i]; //update the left product for next index;
    }

    //pass 2: calculate the product of all elements to the RIGHT of each index and multiply it directly with the left product already store in 'answer';
    let rightProduct = 1;
    for(let i = n -1; i >= 0; i--){
        answer[i] *= rightProduct; //multiply left product by right product 
        rightProduct *= nums[i]
    }

    return answer;
};