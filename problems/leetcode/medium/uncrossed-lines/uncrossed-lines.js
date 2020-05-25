/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = (A, B) => {
    const N = A.length;
    const M = B.length;
    const dp = [];

    for (let i = 0; i < N + 1; i++) {
        dp[i] = new Array(M + 1).fill(0);
    }

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[N][M];
};
