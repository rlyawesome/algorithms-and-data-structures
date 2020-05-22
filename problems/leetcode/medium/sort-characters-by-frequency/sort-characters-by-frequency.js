/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = (s) => {
    const map = new Map();
    let ans = '';

    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    const arr = [...map].sort((a, b) => b[1] - a[1]);

    for (const a of arr) {
        while (a[1]--) {
            ans += a[0];
        }
    }

    return ans;
};
