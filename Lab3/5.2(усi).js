function getProperty(obj, prop) {
    return obj[prop];
}

function addProperty(obj, prop, value) {
    obj[prop] = value;
    return true;
}

function removeProperty(obj, prop) {
    delete obj[prop];
}

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}

function getLengthOfWord(word) {
    return word.length;
}

function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}

function isEven(number) {
    return number % 2 === 0;
}

function isGreaterThan(num1, num2) {
    return num1 > num2;
}

function isSameLength(word1, word2) {
    return word1.length === word2.length;
}

function isEvenAndGreaterThanTen(number) {
    return number % 2 === 0 && number > 10;
}

function computeAreaOfATriangle(base, height) {
    return 0.5 * base * height;
}