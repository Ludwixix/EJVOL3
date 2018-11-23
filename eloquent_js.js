// Program Structure

//Challenge 1
// Looping a triangle

// // Setting empty triangle variable.
// let triangle = ""
// // while loop iterates while triangle length is less than 7.
// // Each iteration while less than 7 adds 1 # to the triangle string
// while(triangle.length < 7){ triangle = triangle +"#"
// console.log(triangle)
// }

// ______________________________________________________________________________

//Challenge 2
// FIZZBUZZ
//
// //Defining my variables. Counter and number
// let number = 0
// let counter = 0
// // While loop will iterate until counter is 100
// while(counter < 100) {
//   // Each interation will add 1 to both number and counter.
//   number = number +1
//   counter = counter +1
//   // First if loop will return fizzbuzz if number is divislb by 3 and 5
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
//______________________________________________________________________________

//Challenge 3
//CHESSBOARD

// let grid2 = " # # # #"
// let grid1 = "# # # # "
// let counter = 0
//
// while (counter < 4) {
//   console.log(grid2)
//   console.log(grid1)
//   counter = counter +1
// }

// //______________________________________________________________________________

// FUNCTIONS

// //Challenge 4
// // minimum
//
//creating my function named min which has 2 parameters.
// function min (arg1, arg2){
//   // Math.min takes 2 arguments from the min function and logs the smaller number.
//   console.log(Math.min(arg1, arg2))
// }
// // I call my function with arguments.
// min(223423,3223432580)

// //______________________________________________________________________________

// Challenge 5
// RECURSION - Is esentially counting down within a function

function isEven(n){
//Termination
  if (n < 0) return
// BASE
  if (n === 0) return 1
// Recursion
x = n * isEven(n -1)
return x === 0 ? true : false
}
