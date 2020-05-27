/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
    const N = nums.length;
    let ans = nums[0];
    let l = 0;
    let r = 0;

    for (let i = 0; i < N; i++) {
        l = (l ? l : 1) * nums[i];
        r = (r ? r : 1) * nums[N - 1 - i];
        ans = Math.max(ans, l, r);
    }

    return ans;
};
