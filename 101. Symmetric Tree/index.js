const isSymmetric = function(root, right) {
    if (root === null && right === null) {
        return true;
    }

    if (root === null || right === null) {
        return false;
    }

    if (right && root.val !== right.val) {
        return false;
    }

    if (right) {
        return isSymmetric(root.right, right.left) && isSymmetric(root.left, right.right);
    } else {
        return isSymmetric(root.left, root.right);
    }
};
