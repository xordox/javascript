function refTest(){
    // Set the value of myNum to 20.
var myNum = 20;
// Create a new variable, anotherNum, and copy the contents of myNum to it.
// Both anotherNum and myNum are now 20.
var anotherNum = myNum;
// Change the value of myNum to 1000.
myNum = 1000;
// Display the contents of both variables.
// Note that the contents of anotherNum haven't changed.
alert(myNum);
alert(anotherNum);

// Create an array of three numbers in a variable named myNumbers.
var myNumbers = [20, 21, 22];
// Make a copy of myNumbers in a newly created variable named copyNumbers.
var copyNumbers = myNumbers;
// Change the first index value of myNumbers to the integer 1000.
myNumbers[0] = 1000;
// Alert both.
alert(myNumbers);
alert(copyNumbers);
}
refTest();