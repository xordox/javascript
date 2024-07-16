"use strict";//One strict mode enhancement that will help catch typographical errors is the prevention of undeclared variables.

//Strict mode also prevents the duplication of variable names within an object or function call:
var myObject = {
    testVar: 1,
    testVar: 2
   };

var x = 4; //produces error: x is not defined due to the use of use script
function alertMessage(alertText) {
    alert(alertText);
}
//alertMessage("Testing scripting");

function cubeme(incomingNum) {
    if (incomingNum == 1) {
        return "What are you doing?";
    } else {
        return Math.pow(incomingNum, 3);
    }
}
var theNum = "hello";
var finalNum = cubeme(theNum);
if (isNaN(finalNum)) {
    alert("You should know that 1 to any power is 1.");
} else {
    alert("When cubed, " + theNum + " is " + finalNum);
}

var orderTotal = 0;
function collectOrder(numOrdered) {
 if (numOrdered > 0) {
 alert("You ordered " + orderTotal);
 orderTotal = numOrdered * 5;
 }
return orderTotal;
}
var y =collectOrder(3);
console.log(y);