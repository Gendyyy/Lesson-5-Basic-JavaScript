function max(a, b) {
    return a > b ? a : b;
}

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

function multiply(numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function findLongestWord(words) {
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected " + expected + " found " + found;
    }
}

const a = [1, 3, 5, 3, 3]; 

const b = a.map(elem => elem * 10);
console.log(b);

const c = a.filter(elem => elem !== 3);
console.log(c);

const d = a.reduce((acc, elem) => acc * elem);
console.log(d);

const d2 = a.find(elem => elem > 1);
console.log(d2);

const d3 = a.findIndex(elem => elem > 1);
console.log(d3);


console.log("Expected output of max(20, 10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(5, 4, 44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of sum([1, 2, 3]) is 6  " + myFunctionTest(6, sum([1, 2, 3])));
console.log("Expected output of multiply([1, 2, 3]) is 6  " + myFunctionTest(6, multiply([1, 2, 3])));
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest('ratset gaj', reverse('jag testar')));
console.log("Expected output of findLongestWord(['apple', 'banana', 'cherry']) is 'banana'  " + myFunctionTest('banana', findLongestWord(['apple', 'banana', 'cherry'])));
console.log("Expected output of filterLongWords(['apple', 'banana', 'cherry'], 5) is ['banana', 'cherry']  " + myFunctionTest(JSON.stringify(['banana', 'cherry']), JSON.stringify(filterLongWords(['apple', 'banana', 'cherry'], 5))));
