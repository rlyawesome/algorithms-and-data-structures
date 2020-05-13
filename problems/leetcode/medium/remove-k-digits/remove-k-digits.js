/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = (num, k) => {
    const ans = [];

    for (const c of num) {
        while (ans.length && ans[ans.length - 1] > c && k) {
            ans.pop();
            k--;
        }
        if (ans.length || c != '0') {
            ans.push(c);
        }
    }

    while (ans.length && k--) {
        ans.pop();
    }

    return ans.length ? ans.join('') : '0';
};
