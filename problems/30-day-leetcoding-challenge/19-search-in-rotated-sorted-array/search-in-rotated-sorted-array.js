/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const N = nums.length;
    if (N == 0) return -1;
    let low = 0;
    let high = N - 1;
    const first = nums[0];

    while (low <= high) {
        const mid = low + parseInt((high - low) / 2);
        const value = nums[mid];
        if (value == target) return mid;
        const isValueBig = value >= first;
        const isTargetBig = target >= first;

        if (isValueBig == isTargetBig) {
            if (value < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (isValueBig) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};
