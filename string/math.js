const mathFunctions = {

    addition (a, b) {
    return a + b;
    },

    subtract (a,b) {
    return a - b;
    },

    multiply (a,b) {
    return a * b;
    },

    divide  (a,b) {
    return a / b;
    }
}

const advancedMath = {
    sqRoot (a){
        return Math.sqrt(a);
    },
    maximum (a, b, c){
        return Math.max(a, b, c);
    }
}
module.exports = {advancedMath, mathFunctions}