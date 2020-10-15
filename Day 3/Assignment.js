function sockMerchant(sockNumbers) {
    let pair =0;
    for(let i=0; i<sockNumbers.length; i++){
        for(let j=i+1; j<sockNumbers.length; j++){

            if(sockNumbers[i] == sockNumbers[j]){
                pair++;

                sockNumbers.splice(i,1);
                sockNumbers.splice(j-1,1);

                i = 0;
            }
        }
    }
    return pair;
}

// Exercise 2
function changeEnough(change, amountDue) {
    [quarter, dime, nickel, penny] = change;
    let cash = (quarter*.25) + (dime *.10) +(nickel*.05) + (penny*.01);
    return cash >= amountDue;
}

// Exercise 3
function findNemo(sentence) {
    let words = sentence.split(' ');

    for(let i =0; i<words.length; i++){
        if(words[i] === "Nemo"){
            return `I found Nemo at ${i+1}!`;
        }
    }

    return "I can't find Nemo :(";
}

// Exercise 4
function arrayOperation(x, y, n) {
    let divisbleNumbers = [];

    for(let i=x; i<=y; i++){
        if (i%n ===0){
            divisbleNumbers.push(i);
        }
    }

    return divisbleNumbers;
}

// Exercise 5 - Part 1

function hasXWon(board) {
    let symbol = "X";
    let win ="XXX";
    //horizontals
    for(let i=0; i<board.length; i++){
        if (board[i].join('') === win){
            return true
        }
    }
    //verticals
    for(let i=0; i<board.length; i++){
        let check = "";
        for(let j=0; j<board[i].length; j++){
            check += board[j][i];
        }
        if(check === win){
            return true
        }
    }
    //diagonals
    //from left to right
    let check ="";
    for(let i =0; i<board.length; i++){
        check += board[i][i];
    }
    if(check === win){
        return true;
    }
    check = "";

    //from right to left
    for(let i =0; i<board.length; i++){
        check += board[i][board.length-1-i];
    }
    if(check === win){
        return true;
    }
    return false;
}

function hasPlayerWon(board, playerSymbol){
    let win = playerSymbol + playerSymbol + playerSymbol;
    //horizontals
    for(let i=0; i<board.length; i++){
        if (board[i].join('') === win){
            return true
        }
    }
    //verticals
    for(let i=0; i<board.length; i++){
        let check = "";
        for(let j=0; j<board[i].length; j++){
            check += board[j][i];
        }
        if(check === win){
            return true
        }
    }
    //diagonals
    //from left to right
    let check ="";
    for(let i =0; i<board.length; i++){
        check += board[i][i];
    }
    if(check === win){
        return true;
    }
    check = "";

    //from right to left
    for(let i =0; i<board.length; i++){
        check += board[i][board.length-1-i];
    }
    if(check === win){
        return true;
    }
    return false;
}

function inProgress(board){
    let check = "";
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j] == undefined){
                return true;
            }
        }
    }
    return false;
}

// Exercise 5 - Part 2
let board =[
    ["X","X","X"],
    ["X","X","X"],
    ["X","X","X"]];


function checkWin(board){
    if(hasPlayerWon(board, "X")){
        return "X";
    }
    else if(hasPlayerWon(board,"O")){
        return "O";
    }
    return false;
}

function ticTacToeGameStatus(board) {
    const result = checkWin(board);
    if(result != false){
        return `Player ${result} has won`;
    }
    else if(inProgress(board)){
        return("Game in progress");
    }
    else{
        return("Game is drawn")
    }
}

console.log(ticTacToeGameStatus(board));

// Do not change the line below
module.exports = {sockMerchant, changeEnough, findNemo, hasXWon, ticTacToeGameStatus, arrayOperation};