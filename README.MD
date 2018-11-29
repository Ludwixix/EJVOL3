# Eloquent Javascript Volume 3, Exercises.

_Readme and solutions by Sam Ludwig_

---

---

###### Chapter 2

# `Program Structure`

##### Challenge 1:

### Looping a Triangle

###### _(page: 37)_

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
while(triangle.length < 7){ triangle = triangle +"#"
console.log(triangle)
}
```

---

##### Challenge 2:

### FIZZBUZZ

###### _(page: 38)_

Write a program that uses console.log to print numbers 1 to 100 with three exceptions:

- For numbers divisible by 3 print "Fizz" instead of the number.
- For number divisible by 5 print "Buzz" instead of the number.
- For numbers divisible by 3 and 5 print "FizzBuzz" instead of the number.

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

###### _(page: 38)_

Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

- Passing this string to console.log should show something like this:

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

###### Chapter 3

# `Functions`

##### Challenge 4:

### MINIMUM

###### _(page: 55)_

The previous chapter introduced the standard function Math.min that returns its smallest argument

- Write a function min that takes two arguments and returns their minimum

###### Solution:

```
function(arg1, arg2){
  console.log(Math.min(arg1, arg2))
}
min(223423,3223432580)
```

---

##### Challenge 5:

### RECURSION

###### _(page: 55)_

Define a recursive function isEven corresponding to this description.

- The function should accept a single parameter (a positive, whole number) and return a Boolean
- Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

_Recursion can only be used on negative numbers if the termination condition is set below the input number.
You could use a plus+ in your recursion as opposed to -minus when using a -negative number_

###### Solution:

```
function isEven(n){
  if (n < 0) return
  if (n === 0) return 1
x = n * isEven(n -1)
return x === 0 ? true : false
  }
}
```

---

##### Challenge 6:

### Bean Counting

###### _(page: 56)_

Write a function countBbs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string.

###### Solution:

```
let b = 0

function countBbs(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {b = b +1
    }
  }
  return b
}
```

`Part 2:`
Next, write a function called countChar that behaves like count Bbs, except it takes a second argument that indicates the character that is to be counted.

###### Solution:

```

let letr = 0

function countChar(string, letter) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] == letter){ letr++
    }
  }
  return letr
}

```

---

###### Chapter 4

# Data Structures: Objects and Arrays

##### Challenge 7:

### The Sum Of A Range

`Part 1`

###### _(page: 79)_

Write a range function that takes two arguments, _start_ and _end_, and returns an array containing all the numbers from _start_ up to (and including) _end_.

###### Solution

```
function sumOfRange(start, end) {
  arr = [start];
  while (start !== end) {
    start++;
    arr.push(start);
  }
  if (start == end) {
    return arr;
  }
}
console.log(sumOfRange(1, 10));
```

_Same function with a slight varitation using true or false._

```
function sumOfRanges(start, end) {
  arr = [start];
  while (start !== end ? true : false) {
    start++;
    arr.push(start);
  }
  return arr;
}
console.log(sumOfRanges(1, 10));
```

`Part 2`

Write a sum function that takes an array of numbers and returns the sum of these numbers.

```
function sumOfNum(arr) {
  num = 0
  for (var i = 0; i < arr.length; i++) {
    num += arr[i]
  }
  return num
}
console.log(sumOfNum([12, 2, 3]))
```

`Part 3` _Bonus Question:_

- Modify your range function to take an optional third argument that indicates the "step" value used when building the array.

- If no step is given, the elements go up by increments of one, corresponding to the old behaviour.

- Make sure it also works with negative step values.

##### Solution:

```
function sumOfRange(start, end, step) {

  arrStart = [];
  // The minus step loop
  if (step < 0) {
    step = step * -1;
    while (end <= start) {
      arrStart.push(start);
      start -= step;
    }
    // The plus step loop
  } else if (step > 0) {
    while (end <= start) {
      arrStart.push(end);
      end += step;
    }
    // The no step loop
  } else {
    while (end <= start) {
      arrStart.push(end);
      end++;
    }
  }
  return arrStart;
}

```
