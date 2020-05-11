// Approach 1
/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
    const compareDesc = (a, b) => {
        if (a == b) return 0;
        a = a.toString();
        b = b.toString();
        let ab = a + b;
        let ba = b + a;
        if (ab < ba) return 1;
        if (ab > ba) return -1;
        return 0;
    };

    nums.sort(compareDesc);
    let ans = nums.join('');
    return ans.charAt(0) == '0' ? '0' : ans;
};

// Approach 2 (Short)
/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
    let ans = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return ans[0] == '0' ? '0' : ans;
};
