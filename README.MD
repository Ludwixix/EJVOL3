# Eloquent Javascript Volume 3
___
##### Challenge 1:
### Looping a Triangle
###### *(page: 37)*

>Write a loop that makes seven calls to console.log to output the following triangle.

```
while(triangle.length < 7){ triangle = triangle +"#"
console.log(triangle)
}
```
---
---

##### Challenge 2:
### FIZZBUZZ
###### *(page: 38)*


>Write a program that uses console.log to print numbers 1 to 100 with two exceptions.
>For numbers divisible by 3 print "Fizz" instead of the number.
>For number divisible by 5 print "Buzz" instead of the number.
>For numbers divisible by 3 and 5 print "FizzBuzz" instead of the number.

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
