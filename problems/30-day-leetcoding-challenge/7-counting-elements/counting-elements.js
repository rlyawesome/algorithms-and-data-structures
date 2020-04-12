/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = (arr) => {
    const set = new Set();

    for (let x of arr) {
        set.add(x);
    }

    let ans = 0;

    for (let x of arr) {
        if (set.has(+x + 1)) ans++;
    }

    return ans;
};
