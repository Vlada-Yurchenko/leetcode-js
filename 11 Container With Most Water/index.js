const maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;

    while (left < right) {
        const leftMostHeight = height[left];
        const rightMostHeight = height[right];
        const minHeight = Math.min(leftMostHeight, rightMostHeight);
        const currentArea = minHeight * (right - left);

        if (currentArea > result) {
            result = currentArea;
        }

        if (leftMostHeight < rightMostHeight) {
            left++
        } else {
            right--;
        }

    }

    return result
};