// Approach 1: Array
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const dict = new Array(26).fill(0);

    for (let c of magazine) {
        dict[c.charCodeAt() - 97]++;
    }

    for (let c of ransomNote) {
        if (--dict[c.charCodeAt() - 97] < 0) return false;
    }

    return true;
};

// Approach 2: Map
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const dict = new Map();

    for (let c of magazine) {
        dict.set(c, (dict.get(c) || 0) + 1);
    }

    for (let c of ransomNote) {
        if (!dict.has(c) || dict.get(c) == 0) return false;
        dict.set(c, dict.get(c) - 1);
    }

    return true;
};
