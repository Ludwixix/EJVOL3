// // Program Structure
//
// // Challenge 1
// // Looping a triangle
//
// // Setting empty triangle variable.
// let triangle = ""
// // while loop iterates while triangle length is less than 7.
// // Each iteration while less than 7 adds 1 # to the triangle string
// while(triangle.length < 7){ triangle = triangle +"#"
// console.log(triangle)
// }
//
// // ______________________________________________________________________________
//
// // Challenge 2
// // FIZZBUZZ
//
// //Defining my variables. Counter and number
// let number = 0
// let countar = 0
// // While loop will iterate until counter is 100
// while(countar < 100) {
//   // Each interation will add 1 to both number and counter.
//   number = number +1
//   countar = countar +1
//   // loop will return fizzbuzz if number is divislb by 3 and 5
//   if (number % 3 == 0 && number % 5 == 0) { console.log("FIZZBUZZ")}
//   // loop will return fizz when number is divisble by 3
//   else if (number % 3 == 0) { console.log("FIZZ")}
//   // loop wil return buzz when number is divisble by 5
//   else if (number % 5 == 0) { console.log("BUZZ")}
// // if number is not divisble by 3 or 5 it will be logged to screen.
//   else {
//     console.log(number)
//   }
// }
// // ______________________________________________________________________________
//
// // Challenge 3
// // CHESSBOARD
//
// let grid2 = " # # # #"
// let grid1 = "# # # # "
// let countr = 0
//
// while (countr < 4) {
//   console.log(grid2)
//   console.log(grid1)
//   countr = countr +1
// }
//
// //______________________________________________________________________________
//
// // FUNCTIONS
//
// //Challenge 4
// // minimum
//
// // creating my function named min which has 2 parameters.
// function min (arg1, arg2){
//   // Math.min takes 2 arguments from the min function and logs the smaller number.
//   console.log(Math.min(arg1, arg2))
// }
// // I call my function with arguments.
// min(223423,3223432580)
//
// //______________________________________________________________________________
//
// // Challenge 5
// // RECURSION - Using a function within a function with an additional variable.
//
// function isEven(n){
// //Termination
//   if (n < 0) return
// // BASE
//   if (n === 0) return 1
// // Recursion
// x = n * isEven(n -1)
// return x === 0 ? true : false
// }
//
// console.log(isEven(50))
// console.log(isEven(75))
// //______________________________________________________________________________
//
// // Challenge 6
// // Bean counting
//
// //The variable for storing the number of letters
// let b = 0
//
// function countBbs(string) {
//   //Using a for loop with index, will iterate length of string
//   for (let i = 0; i < string.length; i++) {
//     //for each index object in string is equal to B the b variable will add 1
//     if (string[i] == "B") { b++
//     }
//   }// returning the final tally of b to be logged to screen
//   return b
// }
// console.log(countBbs("BeansOnBeansOnBeans"))
//
// // Part 2:
//
// let letr = 0
//
// function countChar(string, letter) {
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == letter){ letr++
//     }
//   }
//   return letr
// }
// console.log(countChar("Bean counter beans all day!", "a"))

//______________________________________________________________________________

//Challenge 7
// The Sum Of A Range

//METHOD 2
function sumOfRange(start, end) {
// Array is made containing starting value of array
  arr = [start];
  // While start is lower than end loop will run adding 1 to start each time.
  while (start !== end) {
    start++;
    // Result of start +1 is pushed to array each iteration.
    arr.push(start);
  }
  // Checks if start is equal to end and returns arr.
  if (start == end) {
    return arr;
  }
}
console.log(sumOfRange(1, 10));

//METHOD 1
//Using true or false function.
function derp(start, end) {
  arr = [start];
  while (start !== end ? true : false) {
    start++;
    arr.push(start);
  }
  return arr;
}
console.log(derp(1, 10));

Test
