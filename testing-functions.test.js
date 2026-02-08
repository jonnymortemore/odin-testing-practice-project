import { capitalize, reverseString } from "./testing-functions"

//Capitalise string test
test('is capitalised check 1', () => {
    expect(capitalize("tree")).toBe("Tree")
})

test('is capitalised check 2', () => {
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

