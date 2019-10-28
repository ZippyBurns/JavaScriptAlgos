// Biggie Size - Given an array, write a function that changes all positive numbers 
// in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that 
// same array, changed to [-1, "big", "big", -5].

function biggie_size(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > -1) {
            arr[i] = "big";
        }
    }
    console.log(arr);
}

/////////////////////////////////////////////////////////////////////////////////////////

// Print Low, Return High - Create a function that takes in an array of numbers.
//   The function should print the lowest value in the array, and return the highest 
//   value in the array.

function printLowReturnHigh(arr) {
    var max = arr[0]
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(min);
    console.log(max);
    return max;
}

printLowReturnHigh([2, 3, 4, 1, 11, 4])

/////////////////////////////////////////////////////////////////////////////////////////

// //Print One, Return Another - Build a function that takes in an array of numbers. 
// // The function should print the second-to-last value in the array, 
// //and return the first odd value in the array.

function printAndReturn(arr) {
    var x = arr.length - 2
    console.log(arr[x]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            return (arr[i])
        }
    }

}

console.log(printAndReturn([2, 4, 5, 1, 2, 2]))

/////////////////////////////////////////////////////////////////////////////////////////

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function 
// that returns a new array where each value in the original array has been doubled.  Calling
//  double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr) {
    var myarr = []
    var x = 0
    for (var i = 0; i < arr.length; i++) {
        x = arr[i] * 2; {
            myarr.push(x)
        }
    }
    console.log(myarr);
}

/////////////////////////////////////////////////////////////////////////////////////////


// Count Positives - Given an array of numbers, create a function to replace the last value
//  with the number of positive values found in the array.  Example, countPositives([-1,1,1,1])
//   changes the original array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    var x = 0
    var pos = arr.length - 1
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > -1) {
            x++
        }
    }
    arr[pos] = x;
    console.log(arr);
}

/////////////////////////////////////////////////////////////////////////////////////////

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd
// values in a row, print "That's odd!".  Every time the array has three evens in a row, print 
// "Even more so!".

// ****** NEEDS TO BE FIXED!!!
function evenAndOdds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1); {
            i++; {
                if (arr[i] % 2 === 1) {
                    i++; {
                        if (arr[i] % 2 === 1) {
                            console.log("That's odd!");
                        }
                    }
                }
            }
            if (arr[i] % 2 === 0) {
                i++; {
                    if (arr[i] % 2 === 0) {
                        i++; {
                            if (arr[i] % 2 === 0) {
                                console.log("Even more so!");
                            }
                        }
                    }
                }
            }
        }
    }

    /////////////////////////////////////////////////////////////////////////////////////////

    // Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically
    //  those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value 
    //  and return arr.
    function incrementAndSeconds(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (i % 2 === 1) {
                arr[i]++
            }
            console.log(arr[i]);
        }
        return arr;
    }
    incrementAndSeconds([1, 1, 1, 8])
    /////////////////////////////////////////////////////////////////////////////////////////

    // Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array')
    //  containing strings.  Working within that same array, replace each string with a number - the length of 
    //  the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"])
    //   should return ["hello", 5, 4]. Hint: Can for loops only go forward?

    function previousLengths() {

    }

    /////////////////////////////////////////////////////////////////////////////////////////

    // Add Seven - Build a function that accepts an array. Return a new array with all the values of the original,
    // but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a 
    // new array.

    function addSeven(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i] + 7;
        }
        console.log(arr)
    }
    addSeven([2, 4, 6, 8]);


    /////////////////////////////////////////////////////////////////////////////////////////

    // Reverse Array - Given an array, write a function that reverses its values, in-place. 
    //  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so...
    //   [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
    function reverseArray(arr) {
        var temp = 0;
        var d = arr.length - 1;
        for (var i = 0; i < arr.length / 2; i++) {
            if (i != d) {
                console.log("this is d: " + d);
                console.log("this is i: " + i)
                // console.log(arr.length - 1, d);
                temp = arr[i];
                console.log("this is temp = arr[i]: " + temp)
                arr[i] = arr[d];
                arr[d] = temp;

                d = d - 1;
            }
        }
        return arr;
    }
    reverseArray([5, 4, 3, 2, 1,])
    /////////////////////////////////////////////////////////////////////////////////////////

    // Outlook: Negative - Given an array, create and return a new one containing all the values of 
    // the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], 
    // return [-1,-3,-5].
    function outlookNegative(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > 0) {
                arr[i] = arr[i] - arr[i] * 2;
            }
        }
        return arr;
    }
    outlookNegative([-1, 3, 0, 1, -3])
    /////////////////////////////////////////////////////////////////////////////////////////

    // Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the
    //  values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

    function alwaysHungry(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "food") {
                console.log("yummy");
            }
            else {
                console.log("I'm hungry");
            }
        }
    }
    alwaysHungry(["food", 2, "trying", "food"])
    /////////////////////////////////////////////////////////////////////////////////////////

    // Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last 
    // values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into 
    // ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  
    // No need to return the array this time.
    //NEEDS TO BE FIXED !! 
    function swapTowardCenter(arr) {
        if (arr.length < 5) {
            return null;
        }
        else {
            var temp = arr[0];
            arr[0] = arr[arr.length - 1];
            arr[arr.length - 1] = temp;

            temp = arr[2];
            arr[2] = arr[arr.length - 3]
        }
        console.log("this is the arr: " + arr);
    }
    swapTowardCenter([1,2,3,4,5,6])

    /////////////////////////////////////////////////////////////////////////////////////////

    // Scale the Array - Given an array arr and a number num, multiply all values in the array arr 
    // by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) 
    // should return [3,6,9].

    function scaleArray(arr, tar){
        for(var i = 0; i < arr.length; i++){
            arr[i] = arr[i] * tar;
        }
        return arr;
    }
    scaleArray([1,2,3], 3)

    /////////////////////////////////////////////////////////////////////////////////////////

    // bubbleSort - Sorts the given array from lowest to highest

    function bubbleSort(arr) {
        for (var i = 0; i < arr.length; i++) {
            for (var x = 0; x < arr.length - 1; x++) {
                if (arr[x] > arr[x + 1]) {
                    temp = arr[x];
                    arr[x] = arr[x + 1];
                    arr[x + 1] = temp;
                }
            }
        }
        console.log(arr)
    }

    bubbleSort([5, 2, 1, 3, 6])


    // Quicksort 

    function quickSort(arr) {
        for (var i = 0; i < arr.length; i++) {
            var smallest = i;
            for (var x = i; x < arr.length; x++) {
                if (arr[x] < arr[smallest]) {
                    smallest = x;

                }
            }
            var temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
        return (arr)
    }

    console.log(quickSort([2, 6, 1, 3, 5, 4, 9, 7]))



function quickSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var smallest = i;
        for (var x = i; x < arr.length; x++) {
            if (arr[x] < arr[smallest]) {
                smallest = x;

            }
        }
        var temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp;
    }
    return (arr)
}

console.log(quickSort([2, 6, 1, 3, 5, 4, 9, 7]))





function quickSort2arr(arr1, arr2) {
    var conditon = 0;
    var temp = 0;
    var newarr = [];
    if (arr1.length > arr2.length) {
        condition = arr1.length;
    } else {
        condition = arr2.length;
    }
    for (let i = 0; i < condition - 1; i++) {
        newarr.push(arr1[i]);
        newarr.push(arr2[i]);
    }
    for (var i = 0; i < newarr.length; i++) {
        var smallest = i;
        for (var x = i; x < newarr.length; x++) {
            if (newarr[x] < newarr[smallest]) {
                smallest = x;

            }
        }
        var temp = newarr[smallest];
        newarr[smallest] = newarr[i];
        newarr[i] = temp;
    }
    return newarr
}

console.log(quickSort2arr([1, 2, 3, 6, 9], [4, 5, 8, 9, 10]))