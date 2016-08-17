// https://leetcode.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
'use strict';

let invertTree = function(root) {
  if(root) {
    let left = root.left ? root.left : null;
    let right = root.right ? root.right : null;
    root.left = invertTree(right);
    root.right = invertTree(left);
  }
};
