const divide = function(dividend, divisor) {
    const absDividend = Math.abs(dividend);
    const absDivisor = Math.abs(divisor);
    const arr = String(absDividend).split('');
    const numberLength = arr.length;
    let result = 0;
    let rest = 0;

    for (let i = 0; i < numberLength; i++) {
        rest = rest + arr[i];
        const diff = rest - absDivisor;

        while (diff >= 0 && rest >= absDivisor) {
            result++;
            rest -= absDivisor;
        }

        if (i + 1 < numberLength) {
            result *= 10;
        }

    }

    if (Math.sign(dividend) === Math.sign(divisor)) {
        return result;
    }

    return -result;
};