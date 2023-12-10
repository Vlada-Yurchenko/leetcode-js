const convert = function(s, numRows) {
    const rows = new Array(numRows).fill('');
    let currentRow = 0;
    let goDown;

    for (let i = 0; i < s.length; i++) {
        if (currentRow === 0) {
            goDown = true;
        }

        rows[currentRow] += s[i];

        if (goDown) {
            currentRow++;
        } else {
            currentRow--;
        }

        if (currentRow >= numRows - 1) {
            goDown = false;
            currentRow = numRows - 1;
        }
    }

    return rows.join('')
};