/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
    const R = grid.length;
    const C = grid[0].length;
    // @TODO: change to for loop
    const dp = new Array(R).fill(new Array(C).fill(0));

    for (let i = 0; i < R; ++i) {
        for (let j = 0; j < C; ++j) {
            if (i == 0 && j == 0) {
                dp[i][j] = grid[i][j];
            } else {
                dp[i][j] =
                    grid[i][j] +
                    Math.min(
                        i == 0 ? Infinity : dp[i - 1][j],
                        j == 0 ? Infinity : dp[i][j - 1]
                    );
            }
        }
    }

    return dp[R - 1][C - 1];
};
