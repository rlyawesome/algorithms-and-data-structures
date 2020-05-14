/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    let ans = 0;

    while (n != 0) {
        ans++;
        n &= n - 1;
    }

    return ans;
};
