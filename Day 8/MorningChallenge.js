// Challenge 1
function transformUpvotes(votes){

    let votesToK = votes.split(" ");
    
    for (let i = 0; i < votesToK.length; i++) {
        if (votesToK[i].indexOf("k") > -1){
            votesToK.push(`found k`);
        }
        else{
            votesToK.push(`no k`);
        }
    }
    return votesToK;
}

console.log(transformUpvotes("6.8k 13.5k 100"));
// Challenge 1
function reverseImage(box) {
}

module.exports = {transformUpvotes, reverseImage};