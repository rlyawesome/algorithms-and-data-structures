/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = (s, k) => {
    const N = s.length;
    const counts = new Array(26);
    let ans = 0;

    for (let i = 1; i <= 26; i++) {
        counts.fill(0);
        let l = 0;
        let r = 0;
        let unique = 0;
        let kOrMore = 0;

        while (r < N) {
            if (unique <= i) {
                const c = s.charCodeAt(r);
                let id = c - 97;
                counts[id]++;
                if (counts[id] == 1) unique++;
                if (counts[id] == k) kOrMore++;
                r++;
            } else {
                const c = s.charCodeAt(l);
                const id = c - 97;
                counts[id]--;
                if (counts[id] == 0) unique--;
                if (counts[id] == k - 1) kOrMore--;
                l++;
            }

            if (unique == i && kOrMore == unique) {
                ans = Math.max(ans, r - l);
            }
        }
    }

    return ans;
};
