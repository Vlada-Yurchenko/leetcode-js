const isValidSudoku = function(board) {
    for (let i = 0; i < board.length; i++) {
        const rows = new Set();
        const columns = new Set();
        const squares = new Set();

        for (let k = 0; k < board.length; k++) {
            const rowEl = board[i][k];
            const colEl = board[k][i];
            const squareEl = board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][3 * (i % 3) + (k % 3)];

            if (!rows.has(rowEl)) {
                rowEl !== '.' && rows.add(rowEl);
            } else {
                return false;
            }

            if (!columns.has(colEl)) {
                colEl !== '.' && columns.add(colEl);
            } else {
                return false;
            }

            if (!squares.has(squareEl)) {
                squareEl !== '.' && squares.add(squareEl);
            } else {
                return false;
            }

        }
    }

    return true;
};