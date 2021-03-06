// Approach 1: Knapsack problem
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  const N = coins.length;
  const dp = new Array(N + 1).fill(0);
  const row = new Array(amount + 1).fill(0);
  row[0] = 1;

  for (let i = 0; i < N + 1; i++) {
    dp[i] = row;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i - 1]) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[N][amount];
};

// Approach 2: improved space complexity O(N)
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};
