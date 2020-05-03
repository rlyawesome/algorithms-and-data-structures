// Approach 1: Prototype
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.original = nums;
    this.array = Array.from(nums);
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    this.array = this.original;
    this.original = Array.from(this.original);
    return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.array.length; i++) {
        this.swapAt(i, this.randRange(i, this.array.length));
    }
    return this.array;
};

Solution.prototype.swapAt = function (i, j) {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
};

Solution.prototype.randRange = function (min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Approach 2: Class
class Solution {
    constructor(nums) {
        this.original = nums;
        this.array = Array.from(nums);
    }

    reset = () => {
        this.array = this.original;
        this.original = Array.from(this.original);
        return this.original;
    };

    shuffle = () => {
        for (let i = 0; i < this.array.length; i++) {
            this.swapAt(i, this.randRange(i, this.array.length));
        }
        return this.array;
    };

    swapAt = (i, j) => {
        let temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    };

    randRange = (min, max) => {
        min = Math.floor(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
}
