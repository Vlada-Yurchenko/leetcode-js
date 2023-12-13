var intToRoman = function(num) {
    const matcher = [
        {
            1: 'I',
            4: 'IV',
            5: 'V',
            9: 'IX',
        },
        {
            1: 'X',
            4: 'XL',
            5: 'L',
            9: 'XC',
        },
        {
            1: 'C',
            4: 'CD',
            5: 'D',
            9: 'CM',
        },
        {
            1: 'M',
        },
    ];

    const arr = String(num).split('');
    const numberLength = arr.length;
    let i = numberLength - 1;
    let result = '';

    while (i >= 0) {
        const currentMatcher = matcher[i];
        const currentNumber = arr[numberLength - i - 1];
        const symbol = matcher[i][currentNumber];

        if (symbol) {
            result += symbol;
            i--;
            continue;
        }

        let counter = +currentNumber;

        while (counter > 0) {
            if (counter >= 5) {
                result += currentMatcher[5];
                counter -= 5;
            } else {
                result += currentMatcher[1];
                counter--;
            }
        }

        i--;
    }

    return result;
};