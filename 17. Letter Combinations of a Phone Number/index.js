var letterCombinations = function(digits) {
    const mapper = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    let result = [];
    let current = '';

    const recursiveHelper = (current, digits, pos) => {
        if (pos === digits.length) {
            result.push(current);
            return;
        }

        const combinations = mapper[digits[pos]];

        for (let i = 0; i < combinations.length; i++) {
            recursiveHelper(current + combinations[i], digits, pos + 1);
        }

    };

    recursiveHelper(current, digits, 0);
    return result;

};