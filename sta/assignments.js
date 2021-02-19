let myCountry = 'Eritrea';
let myContinent = 'Africa';
let myPopulation = 6000000;
console.log(myCountry);
console.log(myContinent);
console.log(myPopulation);

//BMI assigments challenge 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;


const BMIMark = markMass / (markHeight * markHeight);
const BMIJohn = johnMass / (johnHeight * johnHeight);

console.log(markHigherBMI = BMIMark > BMIJohn);
console.log(BMIMark, BMIJohn, markHigherBMI);

// if /else assigment  challenge 2

/*1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" */


if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${BMIMark})is higher than John's! (${BMIJohn})`);

}
else {
    console.log(`John's (${BMIJohn})BMI is higher than Mark's(${BMIMark})!`);

}
//truely and falsey value

let money = 0;
if (money) {
    console.log("yep i have money");
}
else {
    console.log("nop i dont have any money");//out put 'nop i dont have any money' b/c 0 is falsey when it change to boolean
}
//2nd ex of falsey  empty string
let wife = "";
if (wife) {
    console.log("yep i have wife");
}
else {
    console.log("nop i dont have any wife");//out put 'nop i dont have any wife' b/c "" is falsey when it change to boolean
}


//3rd ex of falsey value   (undifined)
let plane;// plane not declare so its undifined
if (plane) {
    console.log("yep i have plane");
}
else {
    console.log("nop i dont have any plane");//out put 'nop i dont have any plane' b/c (undifined )is falsey when it change to boolean
}

//strictly comparison (===) Vs loose comparison(==)

let age = 18;
if (age === 18) console.log('you are adult');//only both sides should be true and there is no type convertion is performed here

let doors = '12';
if (doors === 12) console.log('you have doors');//this dosent give as an out put becouse both sides is different types( and in the case of strictly comparison there is no type casting) 

//ex of loose
let num = 23;
if (num == '23') console.log("we have numbers");//this will be true and we will get an output "we have numbers" even if the numbers 23 is not equal to string'23' 
//type conversion is periformed internaly and automatically

//how to prompt input for example of strict comparison and loose conparison
/*let favourite = prompt('what is your favourite number ');
console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {//outputs  "wow, we have our number 23 "  becouse its type cast 23 to string "23" then it executes  '23'=23
    console.log("wow, we have our number 23 ")
} 
*/

let favourite = Number(prompt('what is your favourite number '));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {//outputs  "wow, we have our number 23 "  becouse we type cast manualy  in the above code  Number(prompt('what is your favourite number '));
    console.log("wow, we have our number 23 ")
}

//note === stricktly comparison is the best practice     but loose (==)is not good practice becouse it  creates a lot of bugs 



//coding challenge 3     logical oprrator  and(&&) , or(&&)  , not (!);   solved 1 and 2
/*
const dolphinsScore1 = 96;

const dolphinsScore2 = 108;

const dolphinsScore3 = 89;

const koalasScore1 = 88;

const koalasScore2 = 91;

const koalasScore3 = 110;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(`average of dolphine is ${dolphinsAverage} and average of koalas is ${koalasAverage} `)

if (dolphinsAverage > koalasAverage) {
    console.log(` yahoo..Dolphines are the winners `);
}
else if (dolphinsAverage < koalasAverage) {
    console.log(` yahoo..koalas are the winner `);
}
else if (dolphinsAverage===koalasAverage)  {
    console.log(` yahoo..Dolphines & koalas  are both winners`);
}
else{
    console.log(` no one won the throphy `)
}
*/
//solving bonus 1
/*Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉*/

const dolphinsScore1 = 97;

const dolphinsScore2 = 112;

const dolphinsScore3 = 101;

const koalasScore1 = 109;

const koalasScore2 = 95;

const koalasScore3 = 123;

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(`average of dolphine is ${dolphinsAverageScore} and average of koalas is ${koalasAverageScore} `)

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(` yahoo..Dolphines are the winners `);
}
else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100) {
    console.log(` yahoo..koalas are the winners `);
}
else if (dolphinsAverageScore === koalasAverageScore && koalasAverageScore >= 100 && dolphinsAverageScore >= 100) {
    console.log(` yahoo..koalas are the winners `);
}
else {
    console.log(` no one win the trophy`);

}

//coding challenge #4 solving by ternary operator
//let tip; let bill = 275;
//bill >= 50 && bill <= 300 ? tip = (15 / 100) * bill : tip=(20 / 100) * bill;
//console.log(`The bill was ${bill} and tip was ${tip}, and the total value is ${bill + tip}`);

let tip; let bill = 430;
bill >= 50 && bill <= 300 ? tip = (15 / 100) * bill : tip = (20 / 100) * bill;
console.log(`The bill was ${bill} and tip was ${tip}, and the total value is ${bill + tip}`);
