/**
 * @param {number[]} nums
 * @return {number[]}
 */
//912. Sort an Array
function merge(leftHalf, rightHalf){
    let sortedArray = [];
    while (leftHalf.length && rightHalf.length){
        if(leftHalf[0] < rightHalf[0]){
                sortedArray.push(leftHalf.shift());
        } else {
                sortedArray.push(rightHalf.shift());
        }
    }

    return [...sortedArray, ...leftHalf, ...rightHalf];
}
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums
    }

    const mid = Math.floor(nums.length / 2);

    const leftHalf = nums.slice(0, mid);
    const rightHalf = nums.slice(mid);

    return merge(sortArray(leftHalf), sortArray(rightHalf));

};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//2 arrays are nums1 and nums2
//m and n is elements in nums1 and nums2
// nums1 has a length m + n 
// non-decreasing = increasing order
// case 3 nums1 no element so use nums2 element to check
//88. Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
    nums1L = m - 1;
    nums2L = n - 1;
    totalLength = m + n - 1;

    while(nums1L >= 0 && nums2L >= 0){
        if(nums1[nums1L] > nums2[nums2L]){
            nums1[totalLength] = nums1[nums1L];
            nums1L--;
        } else {
            nums1[totalLength] = nums2[nums2L];
            nums2L--;
        }
    totalLength--;
    }

     while (nums2L >= 0) {
         nums1[totalLength] = nums2[nums2L];
         nums2L--;
         totalLength--;
     }
};