// Reverse
//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed.

function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];

        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

//Rotate
//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount.

//This One had me lost needed solution reference
function rotateArr(arr, shiftBy) {
    var actualRotation;
    if (shiftBy > 0) {
        actualRotation = shiftBy % arr.length;
    } else {
        actualRotation = Math.abs(shiftBy) % arr.length;
    }
    if (shiftBy > 0) {
        for (var i = 0; i < actualRotation; i++) {
            var temp = arr[arr.length - 1];
            for (var x = arr.length - 2; x >= 0; x--) {
                arr[x+1] = arr[x];
            }
            arr[0] = temp;
        }
    }
}

//Filter Range
//Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
    var filter = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
        filter.push(arr[i]);
    }
    }
    return filter;
}

//Concat
//Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays.

function concat(arr1, arr2) {
    var returnArr = [];
    for (var i = 0; i < arr1.length; i++){
        returnArr.length += 1;
        returnArr[returnArr.length - 1] = arr2[i];
    }
    return returnArr;
}

