/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = (preorder) => {
    let i = 0;

    const dfs = (preorder, bound) => {
        if (i == preorder.length || preorder[i] > bound) return null;
        const root = new TreeNode(preorder[i++]);
        root.left = dfs(preorder, root.val);
        root.right = dfs(preorder, bound);
        return root;
    };

    return dfs(preorder, +Infinity);
};
