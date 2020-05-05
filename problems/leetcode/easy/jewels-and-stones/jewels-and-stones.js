/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
    const jewels = new Set(J.split(''));
    return S.split('').filter((c) => jewels.has(c)).length;
};
