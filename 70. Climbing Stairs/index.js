const climbStairs = function(n) {
    let result = 0;
    let prev = 0;
    let beforePrev = 0;
    for (let i = 0; i < n + 1; i++) {
        if (i <= 2) {
            result = i;
        } else {
            result = prev + beforePrev;
        }

        beforePrev = prev;
        prev = result;
    }

    return result;
};
