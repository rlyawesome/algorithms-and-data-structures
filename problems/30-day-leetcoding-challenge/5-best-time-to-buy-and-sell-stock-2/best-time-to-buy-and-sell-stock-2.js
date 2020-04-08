// Approach: Simple One Pass
// Time complexity : O(N). Single pass.
// Space complexity: O(1). Constant space needed.
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }

    return profit;
};

// Approach: Dynamic Programming (?) from Errichto
// Time complexity : O(N)
// Space complexity: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let bestWithStock = Number.MIN_SAFE_INTEGER;
    let bestWithoutStock = 0;

    for (let x of prices) {
        bestWithStock = Math.max(bestWithStock, bestWithoutStock - x);
        bestWithoutStock = Math.max(bestWithoutStock, bestWithStock + x);
    }

    return bestWithoutStock;
};
