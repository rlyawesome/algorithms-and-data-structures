/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxPathSum = (root) => {
    let maxSum = Number.MIN_SAFE_INTEGER;
    getMax(root);
    return maxSum;

    function getMax(node) {
        if (!node) return 0;
        let leftMax = Math.max(getMax(node.left), 0);
        let rightMax = Math.max(getMax(node.right), 0);
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);
        return Math.max(leftMax, rightMax) + node.val;
    }
};
