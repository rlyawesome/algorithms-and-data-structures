/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
const isValidSequence = (root, arr) => {
    const dfs = (root, arr, depth) => {
        if (root == null) return false;
        if (depth >= arr.length || root.val != arr[depth]) return false;

        if (root.left == null && root.right == null) {
            return depth == arr.length - 1;
        }

        return dfs(root.left, arr, depth + 1) || dfs(root.right, arr, depth + 1);
    };

    return dfs(root, arr, 0);
};
