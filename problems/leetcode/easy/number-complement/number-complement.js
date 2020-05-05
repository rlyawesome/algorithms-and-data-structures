/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
    let x = 1;
    while (num > x) x = x * 2 + 1;
    return x - num;
};
