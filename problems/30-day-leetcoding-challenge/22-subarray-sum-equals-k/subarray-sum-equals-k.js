/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    const N = nums.length;
    let ans = 0;
    let sum = 0;
    const map = new Map();
    map.set(0, 1);

    for (let i = 0; i < N; i++) {
        sum += nums[i];
        if (map.has(sum - k)) ans += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return ans;
};
