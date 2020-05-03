/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = (board) => {
    const getLiveNeighbors = (board, i, j, R, C) => {
        let lives = 0;
        for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, R - 1); x++) {
            for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, C - 1); y++) {
                lives += board[x][y] & 1;
            }
        }
        lives -= board[i][j] & 1;

        return lives;
    };

    const R = board.length;
    const C = board[0].length;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            let lives = getLiveNeighbors(board, i, j, R, C);

            if (board[i][j] == 1 && lives >= 2 && lives <= 3) {
                // Make the 2nd bit 1: 01 ---> 11
                board[i][j] = 3;
            }
            if (board[i][j] == 0 && lives == 3) {
                // Make the 2nd bit 1: 00 ---> 10
                board[i][j] = 2;
            }
        }
    }

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            board[i][j] >>= 1;
        }
    }
};

// Alternative way of getting live neoighbors
const getLiveNeighbors2 = (board, i, j, R, C) => {
    let lives = 0;
    let dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
    ];

    for (const dir of dirs) {
        const x = i + dir[0];
        const y = j + dir[1];

        if (x >= 0 && x < R && y >= 0 && y < C) {
            lives += board[x][y] & 1;
        }
    }

    return lives;
};
