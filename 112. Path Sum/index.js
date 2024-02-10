const hasPathSum = function(root, targetSum) {
    if (root === null) {
        return false;
    }

    const newTarget = targetSum - root.val;
    const { left, right } = root;

    if (left === null && right === null) {
        return newTarget === 0;
    }


    return hasPathSum(left, newTarget) || hasPathSum(right, newTarget);
};
