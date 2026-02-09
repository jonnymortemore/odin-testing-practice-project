

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