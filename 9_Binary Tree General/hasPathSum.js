var hasPathSum = function(root, sum) {
    if (!root) return false;

    if (!root.left && !root.right) { // check leaf
        return sum === root.val;
    } else { // continue DFS
        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
};

var hasPathSum = function(root, targetSum) {
    // If the tree is empty i.e. root is NULL, return false...
	if (root == null) return false;
    // If there is only a single root node and the value of root node is equal to the targetSum...
	if (root.val == targetSum && (root.left == null && root.right == null)) return true;
    // Call the same function recursively for left and right subtree...
	return hasPathSum(root.left, targetSum - root.val)|| hasPathSum(root.right, targetSum - root.val);
};

var hasPathSum = function(root, sum) {
    if (!root) return false;

    sum -= root.val;
    if (!root.left && !root.right) return sum === 0;

    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

