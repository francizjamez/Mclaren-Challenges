function isIsogram(str) {

    const createDictionary = function (string) {
        let dictionary = {}
        let convertedStr = string.toUpperCase();
        for (let character of convertedStr) {
            if (dictionary.hasOwnProperty(character)) {
                dictionary[character] += 1
            }
            else {
                dictionary[character] = 1;
            }
        }
        return dictionary;
    }

    const isIso = function (dict) {
        for (let character in dict) {
            if (dict[character] != 1) {
                return false;
            }
        }
        return true;
    }

    let dictionary1 = createDictionary(str);
    return isIso(dictionary1);
}

function inBox(box) {

    for (row of box) {
        for (element of row) {
            if (element === "*") {
                //determine  wheter the asterisk is in the first or last row
                if (box.indexOf(row) == 0 || box.indexOf(row) == box.length - 1) {
                    return false;
                }
                //determine whether the asterisk is the first or last index
                if (row.indexOf(element) == 0 || row.indexOf(element) == row.length - 1) {
                    return false;
                }
                return true;
            }
        }
    }
    
    return false;
}


module.exports = { isIsogram, inBox };