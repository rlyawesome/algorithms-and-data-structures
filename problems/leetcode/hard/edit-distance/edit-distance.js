/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const N = word1.length;
  const M = word2.length;
  const dp = new Array(N + 1).fill(0);

  for (let i = 0; i < N + 1; i++) {
    dp[i] = new Array(M + 1).fill(0);
  }

  for (let i = 1; i <= N; i++) {
    dp[i][0] = i;
  }

  for (let j = 1; j <= M; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[N][M];
};
