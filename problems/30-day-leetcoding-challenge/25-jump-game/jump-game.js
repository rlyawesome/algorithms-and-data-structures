// Approach 1
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
    const N = nums.length;
    let lastPos = nums.length - 1;

    for (let i = N - 1; i >= 0; i--) {
        if (i + nums[i] >= lastPos) {
            lastPos = i;
        }
    }

    return lastPos == 0;
};

// Approach 2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
    const N = nums.length;
    let canReach = 0;

    for (let i = 0; i <= canReach; i++) {
        if (i == N - 1) return true;
        canReach = Math.max(canReach, i + nums[i]);
    }

    return false;
};
