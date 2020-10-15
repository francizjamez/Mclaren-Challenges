// Challenge 1
function consecutiveTruths(arr) {

    let streak = 0;
    let count = 0;
    for (const value of arr) {
        if (value) {
            streak++
        }
        else {
            streak = 0;
        }
        if (streak == 3) {
            count++;
        }
    }
    return count;
}

// Challenge 1
function cropHydrated(farm) {

    const isWaterPresent = (row, column) => {
        let iStart = row - 1;
        if (iStart < 0) {
            iStart = 0
        }
        let iEnd = row + 1;
        if (iEnd >= farm.length) {
            iEnd = farm.length - 1;
        }
        let jStart = column - 1;
        if (jStart < 0) {
            jStart = 0
        }
        let jEnd = column + 1;
        if (jEnd >= farm[0].length) {
            jEnd = farm[0].length - 1;
        }

        for (iStart; iStart <= iEnd; iStart++) {
            for (jStart; jStart <= jEnd; jStart++) {
                if (farm[iStart][jStart] == "w") {
                    return true;
                }
            }
        }

        // for (let i = row - 1; i < row + 1; i++) {
        //     for (let j = column - 1; j < column + 1; j++) {
        //         if (farm[i][j] != undefined) {
        //             if (farm[i][j] == "w") {
        //                 return true;
        //             }
        //         }
        //     }
        return false;
    }

    for (let i = 0; i < farm.length; i++) {
        for (let j = 0; j < farm[i].length; j++) {
            if (farm[i][j] == "c") {
                if (!isWaterPresent(i, j)) {
                    return false;
                }
            }
        }
    }
    return true;
}

let test1 =cropHydrated([
    ["w","c"],
    ["c","c"]
])
console.log(test1);

module.exports = { consecutiveTruths, cropHydrated };