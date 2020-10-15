let test1 = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // should return "(123) 456-7890"

formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) // should return "(519) 555-4468"

formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) // should return "(345) 501-2527"

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

console.log(test1);