/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
    let a = 0;

    for (let i of nums) {
        a ^= i;
    }

    return a;
};
