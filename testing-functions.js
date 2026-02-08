

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