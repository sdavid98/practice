const {
    getUniqueNumber,
    getMedian,
    getMode,
    getUniqueCharsSorted, 
    add, 
    isEqualObjects, 
    groupCalls
} =  require("./practice");

describe("getUniqueNumber", () => {
    test("should return the unique number", () => {
        expect(getUniqueNumber([1, 2, 3, 2, 1])).toBe(3);
        expect(getUniqueNumber([1, 2, 2, 2, 3, 3])).toBe(1);
    })
})

describe("getMedian", () => {
    test("should return the median of the array", () => {
        expect(getMedian([4, 15, 7, 1, 3])).toBe(4)
        expect(getMedian([4, 15, 7, 3])).toBe(5.5)
    })
})

describe("getMode", () => {
    test("should return the mode of the array", () => {
        expect(getMode([4, 15, 7, 1, 7])).toBe(7)
        expect(getMode([4, 3, 7, 1, 3, 7, 3, 1, 3])).toBe(3)
    })
})

describe("getUniqueCharsSorted", () => {
    test("should return the letters of a given word in alphabetical order, omitting duplications", () => {
        expect(getUniqueCharsSorted("Hello World")).toEqual(['d', 'e', 'h', 'l', 'o', 'r', 'w'])
    })
})

describe("add", () => {
    test("should add the given numbers", () => {
        expect(add(3, 5)).toBe(8);
        expect(add(3)(7)).toBe(10);
    })
})

describe("isEqualObjects", () => {
    test("should return true only if all the properties and values are the same", () => {
        expect(isEqualObjects({}, {})).toBe(true);
        expect(isEqualObjects({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
        expect(isEqualObjects({ a: 1, b: 2 }, { b: 1, a: 2 })).toBe(true);
        expect(isEqualObjects({ a: 1, b: 2 }, { a: "1", b: "2" })).toBe(false);
        expect(isEqualObjects({ a: 1, b: 2 }, { b: 2 })).toBe(false);
        expect(isEqualObjects({ c: 0 }, { a: 1, b: 2 })).toBe(false);
    })
})

describe("groupCalls", () => {
    const CALLS = [
        {
            "caller": "Jennica",
            "callDuration": "14:10"
        }, 
        {
            "caller": "Leela",
            "callDuration": "6:38"
        }, 
        {
            "caller": "Jennica",
            "callDuration": "6:12"
        }
    ];

    test("should group the given calls correctly", () => {
        expect(groupCalls(CALLS)).toEqual([
            { caller: "Jennica", numberOfCalls: 2, avgCallDuration: "10:11" },
            { caller: "Leela", numberOfCalls: 1, avgCallDuration: "6:38" },
        ])
    })
})