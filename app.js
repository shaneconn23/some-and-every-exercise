// hasOddNumber
// Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, 
// otherwise it returns false.

function hasOddNumber(array) {
    return array.some(function (value) {
        return value % 2 !== 0;
    });
}




// hasAZero
// Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. 
// Otherwise, the function should return false

function hasAZero(num) {
    return num.toString().split('').some(function (value) {
        return value === '0';
    });
}




// hasOnlyOddNumbers
// Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. 
// If any of the values in the array are not odd, the function should return false.

function hasOnlyOddNumbers(array) {
    return array.every(function (value) {
        return value % 2 !== 0;
    });
}




// hasNoDuplicates
// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values
//  (more than one element in the array that has the same value as another). 
// If there are any duplicates, the function should return false.

function hasNoDuplicates(array) {
    return array.every(function (value) {
        return array.indexOf(value) === arr.lastIndexOf(value);
    });
}







// hasCertainKey
// Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. 
// Otherwise it should return false.

function hasCertainKey(array, key) {
    return array.every(function (value) {
        return key in value;
    });
}





// hasCertainValue
// Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true 
// if every single object in the array contains that value for the specific key.
//  Otherwise it should return false.

function hasCertainValue(array, key, value) {
    return array.every(function (value2) {
        return value2[key] === value;
    })
}