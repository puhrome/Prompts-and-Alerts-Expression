/**
 * Prompts and Alerts Created by puhrome on 5/15/14.
 */
//getting info and out
//a way to get user input

var userInput = prompt("Enter your year of birth:");//put a string in the parenthesis
//won't be stored until we assign it to a variable
console.log(userInput);//print it out

//expression

var width = prompt("We are calculating the area of a rectangle. \nPlease enter the width");
var height = prompt("Please enter the height");
var area = width * height;//calculates with that info
console.log(area);//prints it out to console

alert("The area of your rectangle is " + area);//alert is not used very often
