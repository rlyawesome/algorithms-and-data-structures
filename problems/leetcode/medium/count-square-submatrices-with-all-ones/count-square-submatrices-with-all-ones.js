// Approach 1 (common matrix template)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = (matrix) => {
    const R = matrix.length;
    const C = matrix[0].length;
    const dp = new Array(R + 1);
    let ans = 0;

    for (let i = 0; i <= R; i++) {
        dp[i] = new Array(C + 1).fill(0);
    }

    for (let i = 1; i <= R; i++) {
        for (let j = 1; j <= C; j++) {
            if (matrix[i - 1][j - 1] == 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
            }
            ans += dp[i][j];
        }
    }

    return ans;
};

// Approach 2 (improved)
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = (matrix) => {
    let ans = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] && i && j) {
                matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
            }
            ans += matrix[i][j];
        }
    }

    return ans;
};
