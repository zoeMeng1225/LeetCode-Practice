/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    //logic: Reverse All（[7, 6, 5, 4, 3, 2, 1]） -> Reverse 0 to K -1（[5, 6, 7, 4, 3, 2, 1]） -> Reverse K to end[5, 6, 7, 1, 2, 3, 4]

    const len = nums.length;
    //if k > nums.length
    k = k % len;
    if(k === 0) return 


    //helper function
    function reverse(arr:number[], start:number, end:number){
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    //first rotation
    reverse(nums, 0, len - 1);

    //second rotation
    reverse(nums, 0, k - 1);

    //third rotation
    reverse(nums, k, len - 1)

};