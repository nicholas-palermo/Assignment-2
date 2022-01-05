//Assignment-2: TTP
//Built-In Functions
//Nicholas Palermo

var testArray = [1,2,3,4,5];

//1)ForEach
console.log("Question 1:")

testArray.forEach(
    function printArray(num) {
    console.log(num);
});
//Expected Output:  1 
//                  2
//                  3
//                  4
//                  5



//2)map()
console.log("Question 2:")

console.log(testArray.map(
    function twiceNum (num) {
        num = num*2;
        return num;
      }
));
//Expected Output: [2, 4, 6, 8, 10]  

//3)Filter()
console.log("Question 3:")

console.log(testArray.filter(
    function test(element) {
      if(element > 3) {
        return true;
      } else {
        return false;
      }
    }
  ))
//Expected Output: [4, 5]

 //4)some()
 console.log("Question 4:")

 console.log(testArray.some(
    function isEven(element) {
        if (element % 2 === 0) {
          return true;
        } else {
          return false;
        }
      }
))
//Expected Output: true

//5)every()
console.log("Question 5:")

testArray=[1,3,5,7];
  
console.log(testArray.every (
    function isOdd(element) {
        if (element % 2 === 1) {
            return true;
        } else {
            return false;
        }
    }
  )
)


testArray.push(4);  //adds an even element

console.log(testArray.every (
    function isOdd(element) {
        if (element % 2 === 1) {
            return true;
        } else {
            return false;
        }
    }
  )
)
//Expected output: true
//                 false


//6)reduce()
console.log("Question 6:")

console.log(
    testArray.reduce(
        function sum(element, previousElement) {
            return element + previousElement;
          }
    )
    
)
//Expected Output: 20


//7)includes()
console.log("Question 7:")

testArray = [1,2,3,4,5]
  
 
console.log(testArray.includes(4));
console.log(testArray.includes(7));
//Expected Output: true
//                 false
                    
//8)indexOf()
console.log("Question 8:")



console.log(testArray.indexOf(4));
console.log(testArray.indexOf(7));
  //Expected Output: 3
  //                 -1
  
//9)push()  
console.log("Question 9:")

console.log(testArray.push(6));
console.log(testArray)
//Expected Output: 6
//                 [1, 2, 3, 4, 5, 6]
  
  
  
//10)lastIndexOf
console.log("Question 10:") 

testArray = [1,2,3,2,4,2,6,8]
  
console.log(testArray.lastIndexOf(2));
//Expected output: 5
  
  
//11)Object.keys()
console.log("Question 11:")  

const testObject = {
    first: "Nicholas",
    middle: "Vincent",
    last: "Palermo"
};

  
  
console.log(Object.keys(testObject));
//Expected Output: ['first', 'middle', 'last']
  
  
  
//12)Object.values()
console.log("Question 12:") 
  
console.log(Object.values(testObject));
//Expected Output: ['Nicholas', 'Vincent', 'Palermo']
  
  
  

  
  
  