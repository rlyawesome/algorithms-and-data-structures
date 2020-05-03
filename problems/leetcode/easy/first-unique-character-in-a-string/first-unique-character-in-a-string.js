/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const N = s.length;
    const map = new Map();

    for (let i = 0; i < N; i++) {
        const c = s[i];
        map.set(c, (map.get(c) || 0) + 1);
    }

    for (let i = 0; i < N; i++) {
        if (map.get(s[i]) == 1) return i;
    }

    return -1;
};
