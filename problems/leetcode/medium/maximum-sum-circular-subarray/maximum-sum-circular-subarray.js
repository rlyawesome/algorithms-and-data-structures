/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
    let curMax = 0;
    let maxSum = -30000;
    let curMin = 0;
    let minSum = 30000;
    let total = 0;

    for (const x of A) {
        curMax = Math.max(x, curMax + x);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(x, curMin + x);
        minSum = Math.min(minSum, curMin);
        total += x;
    }

    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};
