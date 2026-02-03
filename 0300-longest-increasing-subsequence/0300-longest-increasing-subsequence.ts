function lengthOfLIS(nums: number[]): number {
    //tails[i] store the minimum end value of the longest increasing subsequence of length i+1
    const tails: number[] = [];
    
    for(const num of nums){
        //if tails is empty, or num is even larger than largest tails
        //append derectly it to the end to form a longer subsequence
        if(tails.length === 0 || num > tails[tails.length - 1]){
            tails.push(num);
        }else{
            //otherwise, find first position of >= in the tails
            //replace to num, make the end of the subsequence of this length smaller
            let left = 0;
            let right = tails.length -1;

            //binary search
            while(left < right){
                const mid = Math.floor((left + right) /2);
                if(tails[mid] < num){
                    left = mid +1;
                }else{
                    right= mid
                }
            }
            //replace
            tails[left] = num;
        }
    }
    return tails.length;
};