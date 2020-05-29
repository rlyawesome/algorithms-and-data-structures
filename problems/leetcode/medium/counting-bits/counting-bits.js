// Approach 1: Using bitwise operators
// Time complexity: O(N * sizeof(integer))
// Space complexity: O(N)
/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = (num) => {
    let ans = [];
    for (let i = 0; i <= num; i++) {
        let count = 0;
        let x = i;
        while (x > 0) {
            count += x & 1;
            x >>= 1;
        }
        ans.push(count);
    }
    return ans;
};

// Approach 2: DP
// Time complexity: O(N)
// Space complexity: O(N)
/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = (num) => {
    const dp = [];
    let offset = 1;
    dp[0] = 0;

    for (let i = 1; i <= num; i++) {
        if (offset * 2 == i) offset *= 2;
        dp[i] = dp[i - offset] + 1;
    }

    return dp;
};
