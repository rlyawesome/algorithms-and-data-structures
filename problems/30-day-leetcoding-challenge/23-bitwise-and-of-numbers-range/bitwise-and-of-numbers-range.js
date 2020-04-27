// By using Brian Kernighan's Algorithm
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = (m, n) => {
    while (n > m) {
        n &= n - 1;
    }

    return m & n;
};
