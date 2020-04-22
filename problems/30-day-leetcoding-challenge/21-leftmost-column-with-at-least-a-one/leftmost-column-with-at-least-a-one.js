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
    const [R, C] = binaryMatrix.dimensions();
    let ans = C;

    for (let i = 0; i < R; i++) {
        let lo = 0;
        let hi = C - 1;

        while (lo <= hi) {
            const mid = lo + parseInt((hi - lo) / 2);

            if (binaryMatrix.get(i, mid) == 0) {
                lo = mid + 1;
            } else {
                ans = Math.min(ans, mid);
                hi = mid - 1;
            }
        }
    }

    return ans == C ? -1 : ans;
};
