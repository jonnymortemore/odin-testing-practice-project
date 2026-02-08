import { capitalize, reverseString } from "./testing-functions"

//Capitalise string test
test('is capitalised', () => {
    expect(capitalize("tree")).toBe("Tree")
    expect(capitalize("bear")).toBe("Bear")
})

test('is already capitalized', () => {
    expect(capitalize("Cat")).toBe("Cat")
})

test('all are capitalized', () => {
    expect(capitalize("bEAR")).toBe("BEAR")
})

test('returns number if number', () => {
    expect(capitalize(1)).toBe(1)
})

test('returns correct with number as string', () => {
    expect(capitalize("1")).toBe("1")
})

test('null returns null', () => {
    expect(capitalize(null)).toBe(null)
})

//Reverse String Tests

test('string is reversed', () => {
    expect(reverseString("cats")).toBe("stac")
    expect(reverseString("bears")).toBe("sraeb")
})

test('multiple words are reversed', () => {
    expect(reverseString("big bad cat")).toBe("tac dab gib")
})

test("doesn't reverse number", () => {
    expect(reverseString(1234)).toBe(1234)
})

test('do reverse string numbers', () => {
    expect(reverseString("1234")).toBe("4321")
})