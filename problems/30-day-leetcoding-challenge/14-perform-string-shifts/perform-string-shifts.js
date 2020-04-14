// Let L be the length of the string and N be the length of the shift array.
// Time complexity: O(N * L)
// Space complexity: O(L)
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
const stringShift = (s, shift) => {
    const len = s.length;

    for (const op of shift) {
        const dir = op[0];
        const amount = op[1] % len;
        let part = '';
        if (dir == 0) {
            part = s.substring(0, amount);
            s = s.substring(amount, len).concat(part);
        } else {
            part = s.substring(len - amount, len);
            s = part.concat(s.substring(0, len - amount));
        }
    }

    return s;
};
