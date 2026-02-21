/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1; //end of valid element of nums1
    let p2 = n - 1; // end of valid element of nums2
    let p = nums1.length - 1; //nums1 end of total length of nums

    while(p2 >= 0){
        if(p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1]
            p1--;
        }else{
            nums1[p] = nums2[p2]
            p2--;
        }
        p--;
    }
};