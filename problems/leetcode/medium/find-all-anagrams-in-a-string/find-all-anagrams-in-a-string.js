/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    if (!s || !s.length || !p || !p.length) return [];

    // create a map to store all characters of string p
    const map = new Map();
    const ans = [];

    for (const c of p) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    const len = p.length;
    // number of found characters
    let count = 0;
    let l = 0;
    let r = 0;

    while (r < s.length) {
        // character at the right index
        const cr = s.charAt(r);
        if (map.has(cr)) {
            // increment count by one if p still has cr character
            if (map.get(cr) >= 1) count++;
            map.set(cr, map.get(cr) - 1);
        }

        // add the left index to the answer if all characters are found
        if (count == len) ans.push(l);

        // move the left index to right by one when the substring
        // is equal to the length of p
        if (r - l + 1 == len) {
            // character at index l
            const cl = s.charAt(l);
            if (map.has(cl)) {
                // decrement count by one if the character was counted before
                if (map.get(cl) >= 0) count--;
                map.set(cl, map.get(cl) + 1);
            }
            l++;
        }
        r++;
    }

    return ans;
};
