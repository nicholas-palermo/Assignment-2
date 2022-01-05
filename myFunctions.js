//Assignment-2: TTP
//My Functions
//Nicholas Palermo

var testArray = [1,2,3,4,5];

//1)forEach()


//calls callback function in myEach function to perform function on each element
function myEach(callback, array) {
  for(var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

//prints element to console
function printArray(num) {
  console.log(num);
}

console.log("Question 1:")
myEach(printArray, testArray);
//Expected Output:  1 
//                  2
//                  3
//                  4
//                  5


//2)map()

//Maps callback function to element and places modified element into new array; returns new array
function myMap(callback, array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    var length = newArray.length;
    newArray[length] = callback(array[i]);
    length++;
    newArray.length = length;
  }
  return newArray;
}

//doubles the parameter passed
function twiceNum (num) {
  num = num*2;
  return num;
}

console.log("Question 2:")
console.log(myMap(twiceNum, testArray));
//Expected Output: [2, 4, 6, 8, 10]               


//3)Filter()

//returns elements that meet criteria specified by callback functions
function myFilter(callback, array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      var length = newArray.length;
      newArray[length] = array[i];
      length++;
      newArray.length = length;
    }
  }
  return newArray;
}

//test for elements greater than 3
function test(element) {
  if(element > 3) {
    return true;
  } else {
    return false;
  }
}

console.log("Question 3:")
console.log(myFilter(test, testArray));
//Expected Output: [4, 5]


//4)some()

//checks to see if any elements meet criteria passed by callback function
function mySome(callback, array) {
  for(var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return true;
    } 
  }
  return false;
}

//checks if element is even
function isEven(element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Question 4:")
console.log(mySome(isEven, testArray));
//Expected Output: true


//5)every()

//new testArray for this instance
testArray=[1,3,5,7];

//returns true only if every element meets callback function criteria
function myEvery(callback, array) {
for(var i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      return false;
    } 
  }
  return true;
}

//checks if element is odd
function isOdd(element) {
  if (element % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

console.log("Question 5:")
console.log(myEvery(isOdd, testArray));
testArray.push(4);  //adds an even element
console.log(myEvery(isOdd, testArray));
//Expected output: true
//                 false




//6)reduce()

//performs an operation on an element and the element before, combines all into a single value
function myReduce(callback, array) {
    var reduction = callback(array[0], 0);
    for (var i = 1; i < array.length; i++) {
      reduction = callback(array[i], reduction);
    }
    return reduction;

}

//adds the elements to its previous element
function sum(element, previousElement) {
  return element + previousElement;
}

console.log("Question 6:")
console.log(myReduce(sum, testArray));
//Expected Output: 20



//7)includes()

//checks for a specific element in the array;
function myIncludes(array, target){
  for(var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return true;
    }
  }
  return false;
}

testArray = [1,2,3,4,5]

console.log("Question 7:")
console.log(myIncludes(testArray, 4));
console.log(myIncludes(testArray, 7));
//Expected Output: true
//                 false
                  

//8)indexOf()

//returns the index of the first value that matches the target number
function myIndexOf(array, target) {
  for(var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("Question 8:")
console.log(myIndexOf(testArray, 4));
console.log(myIndexOf(testArray, 7));
//Expected Output: 3
//                 -1


//9)push()

//appends an element to the end of the array and prints the new length and array
function myPush(array, elementToAdd) {
  var length = array.length;
  array[length] = elementToAdd;
  length++;
  array.length = length;
  return length;
}

console.log("Question 9:")
console.log(myPush(testArray, 6))
console.log(testArray)
//Expected Output: 6
//                 [1, 2, 3, 4, 5, 6]




//10)lastIndexOf

//returns the last instance of a target number of the array; searches the array backwards
function myLastIndexOf(array, target) {
  for(var i = array.length - 1; i >= 0; i--) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

testArray = [1,2,3,2,4,2,6,8]

console.log("Question 10:")
console.log(myLastIndexOf(testArray, 2));
//Expected output: 5


//11)Object.keys()

//intialized new test object with names
const testObject = {
  first: "Nicholas",
  middle: "Vincent",
  last: "Palermo"
};

//finds the keys for each value and places them in an array in order
function grabKeys(Object) {
  var keysArray = [];
  for (const key in Object) {
    var length = keysArray.length;
    keysArray[length] = `${key}`;
    length++;
    keysArray.length = length;
  }

  return keysArray;
}

console.log("Question 11:")
console.log(grabKeys(testObject));
//Expected Output: ['first', 'middle', 'last']



//12)Object.values()

//finds the values for each key and places them in an array in order
function grabValues(Object) {
  var valuesArray = [];
  for (const value in Object) {
    var length = valuesArray.length;
    valuesArray[length] = `${Object[value]}`;
    length++;
    valuesArray.length = length;
  }

  return valuesArray;
}

console.log("Question 12:")
console.log(grabValues(testObject));
//Expected Output: ['Nicholas', 'Vincent', 'Palermo']