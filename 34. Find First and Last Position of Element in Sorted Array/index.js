// @TODO: refactor
const searchRange = function(nums, target) {
    let startIdx = 0;
    let endIdx = nums.length - 1;
    const notFoundResult = [-1, -1];

    if (!nums.length) {
        return notFoundResult;
    }

    if (nums.length === 1) {
        if (nums[0] === target) {
            return [0, 0];
        }
        return notFoundResult;
    }

    while (startIdx !== endIdx) {
        const centerIndex = Math.floor((endIdx + startIdx) / 2);

        if (nums[centerIndex] > target) {
            endIdx = centerIndex;
        }

        if (nums[centerIndex] < target) {
            startIdx = centerIndex;
        }


        if (nums[centerIndex] === target) {
            while (nums[startIdx] !== target) {
                if (nums[startIdx] !== target) {
                    startIdx++;
                }
            }

            while (nums[endIdx] !== target) {
                if (nums[endIdx] !== target) {
                    endIdx--;
                } else {
                    return [startIdx, endIdx];
                }
            }


            return [startIdx, endIdx];
        }

        if (endIdx - startIdx === 1) {
            if (nums[startIdx] === target && nums[endIdx] === target) {
                return [startIdx, endIdx];
            }
            if (nums[startIdx] === target) {
                return [startIdx, startIdx];
            }

            if (nums[endIdx] === target) {
                return [endIdx, endIdx];
            }
            return notFoundResult;
        }


    }

    return notFoundResult;
};
