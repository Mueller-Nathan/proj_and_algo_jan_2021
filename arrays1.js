//Push Front
//1. Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront (arr, num) {

    for(var i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = num;
} 

//Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront (arr) {
    var Value = arr[0];
    for (var i = 1; i < arr.length; i ++) {
        arr[i-1] = arr[i];
    }
    arr.pop();
    return Value;
}

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt (arr, index, val) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = val;

}

//Bonus: Remove At
//Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, index) {

    var Range = arr.length - index;

    var temp = arr[arr.length - 1]
    arr[arr.length - 1] = arr[index]
    arr[index] = temp

    var Value = arr.pop()
    for (var i = 1; i < Range; i += 1){
        temp = arr[arr.length - i]
        arr[arr.length - i] = arr[index]
        arr[index] = temp
    }
    return Value
}