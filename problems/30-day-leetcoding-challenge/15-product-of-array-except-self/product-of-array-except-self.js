/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const output = [];
    output[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    let r = 1;
    for (let i = output.length - 1; i >= 0; i--) {
        output[i] = output[i] * r;
        r *= nums[i];
    }
    return output;
};
