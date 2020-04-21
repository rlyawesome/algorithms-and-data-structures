/**
 * Time Complexity: O(N), where N is the length of T and W is the number of allowed values for T[i]. Each index gets pushed and popped at most once from the stack.
 * Space Complexity: O(W). The size of the stack is bounded as it represents strictly increasing temperatures.
 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = (T) => {
    const N = T.length;
    const stack = [];
    const ans = new Array(N);

    for (let i = N - 1; i >= 0; --i) {
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
            stack.pop();
        }
        ans[i] = !stack.length ? 0 : stack[stack.length - 1] - i;
        stack.push(i);
    }

    return ans;
};
