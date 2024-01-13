const fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const first = nums[i];
                const second = nums[j];
                const leftNum = nums[left];
                const rightNum = nums[right];
                const total =
                    first +
                    second +
                    leftNum +
                    rightNum;

                if (total == target) {
                    result.push([
                        first,
                        second,
                        leftNum,
                        rightNum,
                    ]);
                    do {
                        left++;
                    } while (leftNum === nums[left - 1]);

                }

                if (total < target) {
                    left++;
                }

                if (total > target) {
                    right--;
                }
            }
        }
    }

    return result;
};