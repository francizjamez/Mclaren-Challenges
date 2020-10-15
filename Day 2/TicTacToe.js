let board = [['X', 'O', undefined],[undefined, 'O', 'O'],['X', undefined, undefined]];

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

console.log(inProgress(board));