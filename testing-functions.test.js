import { capitalize, reverseString, Calculator, caesarCipher, analyseArray} from "./testing-functions"

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

//calculator
const calc = new Calculator()

test('addition', () => {
    expect(calc.add(2, 2)).toBe(4)
    expect(calc.add(3, 5)).toBe(8)
})

test('subtraction', () => {
    expect(calc.subtract(5, 3)).toBe(2)
    expect(calc.subtract(10, 5)).toBe(5)
    expect(calc.subtract(2, 10)).toBe(-8)
})

test('divide', () => {
    expect(calc.divide(2, 2)).toBe(1)
    expect(calc.divide(10, 2)).toBe(5)
    expect(calc.divide(3, 2)).toBe(1.5)
})

test('divide should be max 2 decimals', () => {
    expect(calc.divide(10, 3)).toBe(3.33)
})

test('multiply', () => {
    expect(calc.multiply(2, 5)).toBe(10)
    expect(calc.multiply(50, 100)).toBe(5000)
})

//To Test a exception the function that throws an exception needs to invoked within a function
test('check non number values', () => {
    expect(() => calc.add(1, "2")).toThrow(TypeError)
    expect(() => calc.add(10, null)).toThrow(TypeError)
    expect(() => calc.add(1, four)).toThrow(ReferenceError)
})


//Caesar Cipher

test('works as intended', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
    expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('works with negative cipher', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz')
})

test('works with upper case letters', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('works with spaces, punctuation and numbers', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    expect(caesarCipher('H3llo, W0rld!', 3)).toBe('K3oor, Z0uog!')
    
})

test('check no errors on none string values', () => {
    expect(caesarCipher(1234)).toBe(1234)
    expect(caesarCipher(null)).toBe(null)
    //when checking comparisons of objects use "toEqual" -> this checks values are the same but not that they are the same instance of the array object in memory
    expect(caesarCipher(["1", "2", 3])).toEqual(["1", "2", 3])
})


//Analyse Array
test('main functionality works', () => {
     expect(analyseArray([1,8,3,4,2,6])).toBe({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})