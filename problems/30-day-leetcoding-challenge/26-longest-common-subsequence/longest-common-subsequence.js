/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const N = text1.length;
    const M = text2.length;
    const dp = [];

    for (let i = 0; i < N + 1; i++) {
        dp[i] = new Array(M + 1).fill(0);
    }

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[N][M];
};
