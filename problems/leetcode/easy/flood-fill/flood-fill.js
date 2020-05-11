/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
    const dfs = (image, i, j, color, newColor) => {
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length) return;
        if (color == newColor) return;
        if (image[i][j] != color) return;
        image[i][j] = newColor;
        dfs(image, i + 1, j, color, newColor);
        dfs(image, i - 1, j, color, newColor);
        dfs(image, i, j + 1, color, newColor);
        dfs(image, i, j - 1, color, newColor);
    };

    dfs(image, sr, sc, image[sr][sc], newColor);
    return image;
};
