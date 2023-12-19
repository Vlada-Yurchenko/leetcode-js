var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    const numLength = nums.length;
    let result = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < numLength - 2; i++) {
        let left = i + 1;
        let right = numLength - 1;
        while (left !== right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === target) {
                return target;
            }
            if (sum > target) {
                right--;
            }

            if (sum < target) {
                left++;
            }

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }

        }
    }

    return result;
};