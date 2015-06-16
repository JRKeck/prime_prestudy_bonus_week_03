function isItEven(num) {
    if (num%2 !== 0) {
        num = 5;
    }
    else {
        num = 10;
    }
    return num;
}
function tripleIt(num) {
    num = num*3;
    return num;
}
function squareIt(num) {
        num = num*num;
        return num;
}
squareIt(isItEven(tripleIt(2)));
