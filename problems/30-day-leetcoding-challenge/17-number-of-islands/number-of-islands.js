/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    if (!grid || !grid.length) return 0;
    const R = grid.length;
    const C = grid[0].length;
    let ans = 0;

    const dfs = (grid, i, j) => {
        if (i < 0 || i >= R || j < 0 || j >= C || grid[i][j] == 0) return;

        grid[i][j] = 0;
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                dfs(grid, i, j);
                ans++;
            }
        }
    }

    return ans;
};
