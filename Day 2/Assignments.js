// Exercise 1
function hashPlusCount(input) {
    let hashCount = 0;
    let plusCount = 0;

    for(let i=0; i<input.length; i++){
        if(input[i] === "#"){
            hashCount++;
        }
        else{
            plusCount++;
        }
    }
    return [hashCount,plusCount];
}

// Exercise 2 - Part 1
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
function hasOWon(board) {
    let symbol = "O";
    let win ="OOO";
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

// Exercise 2 - Part 2
let board =[
    [undefined,"","X"],
    ["O","",""],
    ["O","",""]];

function ticTacToeGameStatus(board) {
    if(hasXWon(board)){
        return("Player X has won");
    }
    else if(hasOWon(board)){
        return("Player O has won");
    }
    else if(inProgress){
        return("Game in progress");
    }
    else{
        return("Game is drawn")
    }
}
//ticTacToeGameStatus(board);

// Exercise 3
function chatroomStatus(usersOnline) {
    let status ="";

    if(usersOnline.length == 0){
        return "no one online";
    }
    if(usersOnline.length > 0){
        status += usersOnline[0];
        if(usersOnline.length<3){
            status += " "
        }
    } 
    if(usersOnline.length>1){
        if(usersOnline.length == 2){
            status += "and " + usersOnline[1] + " ";
        }
        else{
            status += ", " + usersOnline[1] + " ";
        }
        
    }
    if(usersOnline.length>2){
        status += `and ${usersOnline.length-2} more `
    }

    status +="online"

    return status;
}
let users =["Francis"];
console.log(chatroomStatus(users));


// Exercise 4
function indexShuffle(word) {
    let evenWord="";
    let oddWord ="";

    for(let i=0; i<word.length; i++){
        if(i%2 == 0){
            evenWord += word[i];
        }
        else{
            oddWord += word[i];
        }
    }

    return evenWord + oddWord;
}

//console.log(indexShuffle("holiday"));
// Exercise 5
function formatPhoneNumber(phoneNumber){

    let formattedNumber = "";

    formattedNumber += "(";
    for(let i=0; i<3; i++){
        formattedNumber += phoneNumber[i];
    }
    formattedNumber += ") ";
    for(let i=3; i<6; i++){
        formattedNumber += phoneNumber[i];
    }
    formattedNumber += "-";
    for(let i=6; i<phoneNumber.length; i++){
        formattedNumber += phoneNumber[i];
    }

    return formattedNumber;
}

//console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Do not change the line below
module.exports = {hashPlusCount, hasXWon, ticTacToeGameStatus, chatroomStatus, indexShuffle, formatPhoneNumber};