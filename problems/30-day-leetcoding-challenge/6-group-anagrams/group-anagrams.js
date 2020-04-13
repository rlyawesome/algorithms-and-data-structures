// Canonical Form
// Time Complexity: O(NK), where N is the length of strs, and K is the maximum length of a string in strs.
// Space Complexity: O(NK)
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const map = new Map();

    for (let s of strs) {
        let s2 = s;
        s2 = s2.split('').sort().join();
        if (!map.get(s2)) map.set(s2, []);
        map.get(s2).push(s);
    }

    return Array.from(map.values());
};
