//  Approach 2: Greedy
//  Time complexity: O(N)
//  Space complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let max = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(max, sum);
    }

    return max;
};

//  Approach 3: Dynamic Programming (Kadane's algorithm)
//  Time complexity: O(N)
//  Space complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let ans = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i of nums) {
        sum += i;
        ans = Math.max(ans, sum);
        sum = Math.max(sum, 0);
    }

    return ans;
};
