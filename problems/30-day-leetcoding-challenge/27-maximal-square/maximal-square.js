// Approach 1: DFS (?)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
    if (!matrix.length) return 0;
    const R = matrix.length;
    const C = matrix[0].length;

    const dfs = (matrix, i, j, len) => {
        if (i + len >= R || j + len >= C) return len;
        for (let k = 0; k <= len; k++) {
            if (matrix[i + k][j + len] != 1 || matrix[i + len][j + k] != 1) return len;
        }
        return dfs(matrix, i, j, len + 1);
    };

    let side = 0;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matrix[i][j] == 1) {
                side = Math.max(side, dfs(matrix, i, j, 1));
            }
        }
    }

    return side * side;
};

// Approach 2: DP
// Time Complexity: O(RC)
// Space Complexity: O(RC)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
    if (!matrix.length) return 0;
    const R = matrix.length;
    const C = matrix[0].length;
    const dp = [];
    let side = 0;

    for (let i = 0; i <= R; i++) {
        dp[i] = new Array(C + 1).fill(0);
    }

    for (let i = 1; i <= R; i++) {
        for (let j = 1; j <= C; j++) {
            if (matrix[i - 1][j - 1] == 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                side = Math.max(side, dp[i][j]);
            }
        }
    }

    return side * side;
};

// Approach 2.1: DP (with O(RC) space complexity instead of O((R + 1)(C + 1)))
const maximalSquare = (matrix) => {
    if (!matrix.length) return 0;
    const R = matrix.length;
    const C = matrix[0].length;
    const dp = [];
    let side = 0;

    for (let i = 0; i < R; i++) {
        dp[i] = new Array(C).fill(0);
    }

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matrix[i][j] == 1) {
                dp[i][j] = 1;
                if (i > 0 && j > 0) {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                }
                side = Math.max(side, dp[i][j]);
            }
        }
    }

    return side * side;
};

// Approach 3: DP (improved space complexity)
// Time Complexity: O(RC)
// Space Complexity: O(C)
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = (matrix) => {
    if (!matrix.length) return 0;
    const R = matrix.length;
    const C = matrix[0].length;
    const dp = new Array(C + 1).fill(0);
    let prev = 0;
    let side = 0;

    for (let i = 1; i <= R; i++) {
        for (let j = 1; j <= C; j++) {
            let temp = dp[j];
            if (matrix[i - 1][j - 1] == 1) {
                dp[j] = Math.min(dp[j], Math.min(dp[j - 1], prev)) + 1;
                side = Math.max(side, dp[j]);
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }

    return side * side;
};
