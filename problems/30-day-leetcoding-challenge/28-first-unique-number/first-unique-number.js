// Approach 1: with HashMap
/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
    this.map = new Map();
    this.nums = nums;

    for (let i = 0; i < nums.length; i++) {
        this.map.set(nums[i], (this.map.get(nums[i]) || 0) + 1);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    for (let i = 0; i < this.nums.length; i++) {
        if (this.map.get(this.nums[i]) == 1) {
            return this.nums[i];
        }
    }
    return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    this.nums.push(value);
    this.map.set(value, (this.map.get(value) || 0) + 1);
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
