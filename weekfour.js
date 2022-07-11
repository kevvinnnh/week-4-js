//VERY EASY 

function min( firstNum, secondNum ) {
	if ( firstNum < secondNum )
      return firstNum;
    else
      return secondNum;
}
// EAST -  Create an array of students holding their last name, first name, and age with 3 students. 
//To validate, please log a greeting with the first name, last name and age of the 2nd student. 
//The output should look like "Hello, my name is John Doe and I'm 19 years old."
var lst = ['Kevin', 'Hernandez', 12, 'Maria', 'Jane', 18, 'Ceaser', 'Joe', 19]

function validation (list, studentNum) {
    return console.log(`Hello, my name is ${list[studentNum +1]} ${list[studentNum + 2]} and I'm ${list[studentNum + 3]} years old`)
}

validation(lst, 2)

//MEDIUM - Create a program that accepts a number (1-12) as input and logs to the console that number and its
// corresponding month. For example: if the user enters the number 3, then it should return the month “March.” 
//console.log the user if they enter an invalid number (e.g. less than 1 or greater than 12)



function monthConverter (num){
    if (num === 1){return console.log("January")}
    else if (num === 2){return console.log("Febuary")}
    else if (num === 3){return console.log("March")}
    else if (num === 4){return console.log("April")}
    else if (num === 5){return console.log("May")}
    else if (num === 6){return console.log("June")}
    else if (num === 7){return console.log("July")}
    else if (num === 8){return console.log("August")}
    else if (num === 9){return console.log("September")}
    else if (num === 10){return console.log("October")}
    else if (num === 11){return console.log("November")}
    else if (num === 12){return console.log("December")}
    else console.log("invalid entry")
}
monthConverter(3)
monthConverter(13)

//HARD - Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
//BMI = mass / height ^2 = mass / (height * height)
//Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable 
//containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with 
//the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).
    

function bmiCompare (tomMass, tomHeight, jerryMass, jerryHeight){
    var conditional = false; 
    var tomBmi = 0; 
    tomBmi = tomMass / (tomHeight * tomHeight)
    var jerryBmi = 0; 
    jerryBmi = jerryMass / (jerryHeight * jerryHeight)
    if (tomBmi > jerryBmi){conditional = true }
    return console.log(conditional )
}

bmiCompare( 8,9 ,45, 10)