

export function capitalize(string) {
    if (typeof string !== "string") {
        return string
    }
    return string[0].toUpperCase() + string.slice(1, string.length)
}

export function reverseString(string) {
    if (typeof string !== "string") {
        return string
    }
    let backwardsString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        backwardsString += string[i]
    }
    return backwardsString
}

export class Calculator {

    add(a, b) {
        if(this.#checkValues(a, b)) {
            return a + b
        }
    }
    subtract(a, b) {
        if(this.#checkValues(a, b)) {
            return a - b
        }   
    }
    divide(a, b) {
        if(this.#checkValues(a, b)) {
            let sum = a / b
            //set to 2 decimal places
            sum = Math.round(sum * 100) / 100
             return sum
        }
    }
    multiply(a, b) {
        if(this.#checkValues(a, b)) {
            return a * b
        }
    }

    #checkValues(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return true
        }
        else {
            throw new TypeError("input was not an number")
        }
            
    }
}

export function caesarCipher(string, cipher) {
    const cipherCode = buildCipherDict(cipher)
    //split the string into an array
    const stringArray = string.split("")
    //loop through array to replace letter with the new letter
    // you can use .entries on an array to get the index as well as value
    for (const [index, letter] of stringArray.entries()) {
        stringArray[index] = getNewLetter(letter, cipherCode)
    }

    //join to convert an array back into a string
    return stringArray.join("")

    function getNewLetter(letter, cipherCode) {
        //make sure letters are on A-Z without special characters
        if(!letter.match(/[a-z]/i)) {
            return letter
        }
        //find the new letter in the cipher code
        const newLetter = cipherCode[letter.toLowerCase()]
        //check if it's upper case from original letter and return as appropriate
        if (checkIfUpperCase(letter)) {
            return newLetter.toUpperCase()
        }

        return newLetter
    }

    function checkIfUpperCase(letter) {
        //checks if the letter is current upper case
        if(letter == letter.toUpperCase()) {
            return true
        }
        return false

    }

    function buildCipherDict(cipher) {
        //static alphabet array
        const ALPHABET = [
            "a","b","c","d","e","f","g","h","i","j","k","l","m",
            "n","o","p","q","r","s","t","u","v","w","x","y","z"
        ];
        //initialize code object
        const cipherCode = {}
        //loop through each letter and set it as a key with the value of it's new letter using cipher amount
        for(const [index, letter] of ALPHABET.entries()) {
            const newIndex = ((index) => {
                const newIndex = index + cipher
                if(cipher > 0) {
                    //positive cipher
                     if (newIndex <= ALPHABET.length - 1) {
                        return newIndex
                    } else {
                        return newIndex - ALPHABET.length
                    }
                } else {
                    //negative cipher
                    if(newIndex > 0) {
                        return newIndex
                    } else {
                        return ALPHABET.length - Math.abs(newIndex)
                    }
                }
               
            })(index)
            
            cipherCode[letter] = ALPHABET[newIndex]
        }
        console.log(cipherCode)
        return cipherCode
    }
}