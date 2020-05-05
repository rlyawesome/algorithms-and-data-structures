// Approach 1: Recursion + Memoization
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const robb = (nums, i) => {
        if (i < 0) return 0;
        if (memo[i] >= 0) return memo[i];
        let ans = Math.max(robb(nums, i - 2) + nums[i], robb(nums, i - 1));
        memo[i] = ans;
        return ans;
    };

    const memo = new Array(nums.length + 1).fill(-1);
    return robb(nums, nums.length - 1);
};

// Approach 2: DP
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    const N = nums.length;
    const dp = [];
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 1; i < N; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }

    return dp[N];
};
