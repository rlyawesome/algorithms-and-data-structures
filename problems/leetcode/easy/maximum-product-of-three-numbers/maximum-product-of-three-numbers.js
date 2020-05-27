// Apprach 1: Sorting
// Time complexity: O(NlogN)
// Space complexity: O(logN)
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
    const N = nums.length;
    nums = nums.sort((a, b) => a - b);
    return Math.max(nums[0] * nums[1] * nums[N - 1], nums[N - 1] * nums[N - 2] * nums[N - 3]);
};

// Apprach 2: Single Scan
// Time complexity: O(N)
// Space complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
    let min1 = Number.MAX_SAFE_INTEGER;
    let min2 = Number.MAX_SAFE_INTEGER;
    let max1 = Number.MIN_SAFE_INTEGER;
    let max2 = Number.MIN_SAFE_INTEGER;
    let max3 = Number.MIN_SAFE_INTEGER;

    for (const n of nums) {
        if (n <= min1) {
            min2 = min1;
            min1 = n;
        } else if (n <= min2) {
            // n lies between min1 and min2
            min2 = n;
        }
        if (n >= max1) {
            // n is greater than max1, max2 and max3
            max3 = max2;
            max2 = max1;
            max1 = n;
        } else if (n >= max2) {
            // n lies betweeen max1 and max2
            max3 = max2;
            max2 = n;
        } else if (n >= max3) {
            // n lies betwen max2 and max3
            max3 = n;
        }
    }

    return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
