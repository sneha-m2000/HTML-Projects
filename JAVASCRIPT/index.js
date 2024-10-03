//Hello,sneha
// change  the name  firstletter in capital

// to do this .........//

// 1.create a var that stores that name  users enters via prompt//
var name=prompt("What is your name?")

//2. To capitalise the first letter  of  their name,Isolate   first letter to  other variable
var firstChar=name.slice(0,1)

//3. Turs the first letter into uppercase

var firstCharIntoUppercase=firstChar.toUpperCase()

//4.Isolate  the restOne

var restOne=name.slice(1,name.length)

//5. concantenate the first char with  the rest of char

var  newchar=firstCharIntoUppercase+restOne

//6.we use  the  capitalized  version of their name to  greet  them using an alert.

alert("Hello!"+ newchar)