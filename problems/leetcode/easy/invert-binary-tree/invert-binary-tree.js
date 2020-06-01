/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Approach 1: Recursive
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// More concise
const invertTree = (root) => {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

// Approach 2: DFS using stack
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) return null;
  const stack = [];
  stack.push(root);

  while (stack.length) {
    const node = stack.pop();
    const left = node.left;
    const right = node.right;
    node.left = right;
    node.right = left;

    if (right) stack.push(right);
    if (left) stack.push(left);
  }

  return root;
};
