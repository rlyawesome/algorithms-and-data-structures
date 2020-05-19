/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    if (!s1 || !s1.length || !s2 || !s2.length) return false;

    // create a map to store all characters of string s1
    const map = new Map();
    const ans = false;

    for (const c of s1) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    const len = s1.length;
    // number of found characters
    let count = 0;
    let l = 0;
    let r = 0;

    while (r < s2.length) {
        // character at the right index
        const cr = s2.charAt(r);
        if (map.has(cr)) {
            // increment count by one if s1 still has cr character
            if (map.get(cr) >= 1) count++;
            map.set(cr, map.get(cr) - 1);
        }

        // s2 contains s1 if all characters are already found
        if (count == len) return true;

        // move the left index to right by one when the substring
        // is equal to the length of s1
        if (r - l + 1 == len) {
            // character at the left index
            const cl = s2.charAt(l);
            if (map.has(cl)) {
                // decrement count by one if the character was counted before
                if (map.get(cl) >= 0) count--;
                map.set(cl, map.get(cl) + 1);
            }
            l++;
        }
        r++;
    }

    return false;
};
