const {uppercase, lowercase} = require("./string")
const {mathFunctions, advancedMath} = require("./math")

describe("Testing the string module", () =>{

    test("should uppercase a string input", () => {
        expect(uppercase("bob")).toBe("BOB");
    });
    test("should lowercase a string input", () => {
        expect(lowercase ("FULL SAIL")).toBe("full sail");
    });

});

describe("Perform basic math operations", () => {
    test("add 1 + 2 to equal 3", () => {
        expect(mathFunctions.addition(1, 2)).toBe(3);
    });
    test("subtract 3 - 2 to equal 1", () => {
        expect(mathFunctions.subtract(3, 2)).toBe(1);
    });
    test("multiply 5 * 2 to equal 10", () => {
        expect(mathFunctions.multiply(2, 5)).toBe(10);
    });
    test("divide 4 / 2 to equal 2", () => {
        expect(mathFunctions.divide(4, 2)).toBe(2);
    });
})

describe("Use advanced math to find square root and max number", () => {
    test("find the square root of 9", () => {
        expect(advancedMath.sqRoot(9)).toBe(3);
    });
    test("Find the largest number out of 1, 5 and 10", () => {
        expect(advancedMath.maximum(1,5,10)).toBe(10);
    });
})

//testing math object add, subtract, divide, mulitply ( no need for math object)
//describe with advanced math : square root and max number (use math object with sq root and max)