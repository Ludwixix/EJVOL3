Eloquent Javascript Volume 3, Exercises.
==
*Readme and solutions by Sam Ludwig*

___
---

# `Program Structure`




##### Challenge 1:
### Looping a Triangle
###### *(page: 37)*
Write a loop that makes seven calls to console.log to output the following triangle.

```
#
##
###
####
#####
######
#######
```
###### Solution:
```
let triangle = ""
  while(triangle.length < 7) {
    triangle = triangle +"#"
  console.log(triangle)
}
```

---


##### Challenge 2:
### FIZZBUZZ
###### *(page: 38)*
Write a program that uses console.log to print numbers 1 to 100 with three exceptions:
* For numbers divisible by 3 print "Fizz" instead of the number.
* For number divisible by 5 print "Buzz" instead of the number.
* For numbers divisible by 3 and 5 print "FizzBuzz" instead of the number.

###### Solution:

```
let number = 0
let counter = 0
while(counter < 100) {
  number = number +1
  counter = counter +1
  if (number % 3 == 0 && number % 5 == 0) { console.log("FIZZBUZZ")}
  else if (number % 3 == 0) { console.log("FIZZ")}
  else if (number % 5 == 0) { console.log("BUZZ")}
  else {
    console.log(number)
  }
}
```
---

##### Challenge 3:
### CHESSBOARD
###### *(page: 38)*
Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
* Passing this string to console.log should show something like this:

```
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```
###### Solution:

```
let grid2 = " # # # #"
let grid1 = "# # # # "
let counter = 0

while (counter < 4) {
  console.log(grid2)
  console.log(grid1)
  counter = counter +1
}
```

---

# `Functions`

##### Challenge 4:
### MINIMUM
###### *(page: 55)*
The previous chapter introduced the standard function Math.min that returns its smallest argument
* Write a function min that takes two arguments and returns their minimum

```
function(arg1, arg2){
console.log(Math.min(arg1, arg2))
}
min(223423,3223432580)
```

---

##### Challenge 5:
### RECURSION
###### *(page: 55)*
Define a recursive function isEven corresponding to this description.
* The function should accept a single parameter (a positive, whole number) and return a Boolean
* Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

*Recursion can only be used on negative numbers if the termination condition is set below the input number.
You could use a plus+ in your recursion as opposed to -minus when using a -negative number*

```
function isEven(n){
  if (n < 0) return
  if (n === 0) return 1
    x = n * isEven(n -1)
  return x === 0 ? true : false
}
```
