/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = (binaryMatrix) => {
    const search = (binaryMatrix, x, C) => {
        if (C == 0) return -1;
        let lo = 0;
        let hi = C - 1;
        let minIndex = C;

        while (lo <= hi) {
            const mid = lo + parseInt((hi - lo) / 2);
            const el = binaryMatrix.get(x, mid);

            if (el == 0) {
                lo = mid + 1;
            } else {
                minIndex = Math.min(minIndex, mid);
                hi = mid - 1;
            }
        }

        return minIndex == C ? -1 : minIndex;
    };

    const [R, C] = binaryMatrix.dimensions();
    let ans = Infinity;

    for (let i = 0; i < R; i++) {
        const index = search(binaryMatrix, i, C);
        if (index >= 0) ans = Math.min(ans, index);
    }

    return ans == Infinity ? -1 : ans;
};
