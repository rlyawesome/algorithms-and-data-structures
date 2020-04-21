/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
    if (!nums.length) return [];
    const N = nums.length;
    let ans = [];

    for (let i = 0; i < N; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] > 0) ans.push(i + 1);
    }

    return ans;
};
