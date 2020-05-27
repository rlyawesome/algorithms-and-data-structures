/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = (s, k) => {
    const set = new Set(['a', 'e', 'i', 'o', 'u']);
    let l = 0;
    let r = 0;
    let ans = 0;
    let count = 0;

    while (r < s.length) {
        if (set.has(s.charAt(r))) count++;
        if (r - l + 1 == k) {
            ans = Math.max(ans, count);
            if (set.has(s.charAt(l))) count--;
            l++;
        }
        r++;
    }

    return ans;
};
