Eloquent Javascript Volume 3, Exercises.
==
*Readme and solutions by Sam Ludwig*

___
##### Challenge 1:
### Looping a Triangle
###### *(page: 37)*

###### Write a loop that makes seven calls to console.log to output the following triangle.

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
---


##### Challenge 2:
### FIZZBUZZ
###### *(page: 38)*


###### Write a program that uses console.log to print numbers 1 to 100 with three exceptions:
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
---

##### Challenge 3:
### CHESSBOARD
###### *(page: 38)*

###### Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
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
