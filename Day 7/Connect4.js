function generateRandomBoard(row, column) {

    let board = [];
    let symobls = [" ", "X", "O"]
    
    for (let i = 0; i < row; i++) {
        let array = []
        for (let j = 0; j < column; j++) {
            array.push(" ");
        }
        board[i] = array;
    }


    for (let i = row - 1; i >= 0; i--) {
        for (let j = 0; j < column; j++) {
            if (i == row - 1) {
                const random = Math.floor(Math.random() * 3);
                board[i][j] = symobls[random];
            }
            else if (board[i + 1][j] != " ") {
                const random = Math.floor(Math.random() * 3);
                board[i][j] = symobls[random];
            }
        }
    }

    // let turn = 0;
    // let totalTurns = row * column
    
    // while(inProgress(board)){
    //     let randomRow = Math.floor(Math.random()* row);
    //     let randomCol = Math.floor(Math.random()* column)
    //     console.log(randomCol,randomRow)
    // }
    return board;
}

function hasPlayerWon(board, playerSymbol) {

    const win = playerSymbol + playerSymbol + playerSymbol + playerSymbol;

    let check;
    //horizontals
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {
            check = "";
            for (let k = j; k < j + 4; k++) {
                check += board[i][k];
            }
            if (check === win) {
                return `4 connected ${playerSymbol} on row ${i} column ${j} horizontally`;
            }
        }
    }
    //vertical
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {
            check = "";
            for (let k = j; k < j + 4; k++) {
                check += board[k][i];
            }
            if (check === win) {
                return `4 connected ${playerSymbol} on row ${j} column ${i} vertically`;
            }
        }
    }
    //diagonals
    //backward diagonal
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {
            check = "";
            for (let k = j; k < j + 4; k++) {
                check += board[k][k];
            }
            if (check === win) {
                return `4 connected ${playerSymbol} on row ${i} column ${j} diagonally from left to right`;
            }
        }
    }
    //forward diagonals
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {
            check = "";
            for (let k = j; k < j + 4; k++) {
                check += board[k][board.length - 1 - k];
            }
            if (check === win) {
                return `4 connected ${playerSymbol} on row ${i} column ${board.length - i} diagonally from right to left`;
            }
        }
    }
    return false;
}

function inProgress(board) {

    for (const row of board) {
        for (const element of row) {

            if (element == " ") {
                return true;
            }
        }
    }

    return false;
}

function checkWin(board) {
    let xWin = hasPlayerWon(board, "X");
    let oWin = hasPlayerWon(board, "O");
    if (xWin != false) {
        return xWin;
    }
    else if (oWin != false) {
        return oWin;
    }
    return false;
}
function connect4Status(board) {
    let result = checkWin(board);
    if (result != false) {
        return result;
    }
    else if (inProgress(board)) {
        return `Game is in progress`
    }
    else{
        return `Game is Drawn`;
    }
}

function printBoard(board){

    let columnCount = 0;
    let byLinePrint = "   "
    for (let i = 0; i < board.length; i++) {
        byLinePrint += `${i}  `;
    }
    console.log(byLinePrint);
    byLinePrint = "";
    for (const row of board) {
        byLinePrint += columnCount+"  ";
        columnCount++;
        for (const element of row) {
           byLinePrint += element +"  "; 
        }
        console.log(byLinePrint);
        byLinePrint ="";
    }
    
}

for (let i = 0; i < 10; i++) {
    let board = generateRandomBoard(5, 5);
    //console.log(board);
    printBoard(board);
    console.log(connect4Status(board));
    console.log("------------------------");
}