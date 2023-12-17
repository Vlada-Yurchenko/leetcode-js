const threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let i = 0;
    const result = [];

    while (i < nums.length - 2) {
        const first = nums[i];
        const targetSum = 0 - first;
        let left = i + 1;
        let right = nums.length - 1;

        if (i > 0 && first === nums[i - 1]) {
            i++;
            continue;
        }

        while (left !== right) {
            const second = nums[left];
            const third = nums[right];
            const sumOf2 = second + third;

            if (left > i + 1 && second === nums[left - 1]) {
                left++;
                continue;
            }

            if (sumOf2 > targetSum) {
                right--;
                continue;
            }

            if (sumOf2 < targetSum) {
                left++;
                continue;
            }

            result.push([first, second, third]);
            left++;
        }

        i++;
    }
    return result;
};