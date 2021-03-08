//functions   
//A JavaScript functions is a block of code designed to perform a particular task. 
//A JavaScript function is executed when "something" invokes it (calls it) 
//eg about a function

function juiceProcessor(apple, banana, orange) {// apple, banana, orange  are parameters
    const juice = `${apple} apple juice and ${banana} bnanan juice and ${orange} orange juice`;
    return juice;

}
const appleBananaJuice = juiceProcessor(3, 5, 8);// 3, 5 ,8 are called arguments
console.log(appleBananaJuice);//this produce output of "3 apple juice and 5 bnanan juice"
console.log(juiceProcessor(3, 5, 8));// produce the same result  just with out the holder this is the second option


//example2  about functions

function oddEvenNumber(number) {

    if (number % 2 == 0) {
        const even = `the number ${number} is even`;
        return even;
    }
    else {
        const odd = `the number ${number} is odd`;
        return odd;
    }
}
const theNUmber = oddEvenNumber(6);
console.log(theNUmber);
console.log(oddEvenNumber(5));


// function declaration  vs fanction expressions

//eg   function declaration

function calcAge1(birthYear) { // function declared with  name   calcAge
    return 2037 - birthYear;
}
const Age1 = calcAge1(1991);


// eg  fanction expressions

const calcAge2 = function (birthYear) {// now here function changes to expression , 
    //b/c we only  declare function with out its name and then assigned to the name  "const calcAge"  that means
    // function (birthYear) return 2037 - birthYear; becomes a value (becouse expressions produce values)

    return 2037 - birthYear;
}
const Age2 = calcAge2(1991);
console.log(Age1, Age2);

/* main differnce b/n function declaration  vs fanction expressions  is
- function declaration can be  called them even before they declared

eg
const Age1 = calcAge1(1991);// this called the function before its declared
function calcAge1(birthYear) {// declared function
    return 2037 - birthYear;
    onst Age1 = calcAge1(1991);

    but with fanction expressions we can not call them before declared we only call them after they are declared
    */


// Arow  function   is also  a function  that is shortest and have the speed
//eg1  one liner example
const calcAge3 = birthYear => 2037 - birthYear;
const Age3 = calcAge3(1991);
console.log(Age3);
//eg2 claculate the retairment age        this is ex of arrow function

const retairmentAge = birthYear => {// in this ex we use return and {} braces  b/c there is more than 1 line of code
    const age = 2037 - birthYear;
    const retairment = 65 - age;
    return retairment;
}

console.log(retairmentAge(1991));

//eg3  if the arrow fucntion have  more than one parameter
//we but () for 2 or more parameters
const retairmentAgeN = (birthYear, firstName) => {// in this ex we use return and {} braces  b/c there is more than 1 line of code
    const Age = 2037 - birthYear;
    const retairments = 65 - Age;
    return `${firstName} will retire after ${retairments}years`;
}
console.log(retairmentAgeN(1991, 'john'));
console.log(retairmentAgeN(1996, 'dave'));

//function call functions 
// eg.  this code cuts friuts in to pices first function recives friuts and call the cutFriuts and cutFriuts function return the pices 
function cutsFriuts(friut) {
    return friut * 2;//return call to the caller

}

function juiceProcessors(pearl, watermellon) { //recives call from the caller 
    const pearlPcs = cutsFriuts(pearl);//calls cutsFriut
    const waterMellonPics = cutsFriuts(watermellon);//Calls cutsFriut

    const juices = `${pearlPcs} pearlpcs and ${waterMellonPics} waterMellonPics`;
    return juices;

}
console.log(juiceProcessors(4, 2));// 1st step  this line calls juiceProcessors function

/* juiceProcessors(4, 2) calls =>  function juiceProcessors(pearl, watermellon) then  cutsFriuts(pearl) &cutsFriuts(watermellon);
calls=> function cutsFriuts(friut) then this returns value to the caller cutsFriuts(pearl); then  this return to the orginal caller
 juiceProcessors(4, 2) */

//JavaScript Fundamentals – Part 2 (Coding Challenge #1)

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let dolphineSc = calcAverage(44, 23, 71);
console.log(dolphineSc);
let koalasSc = calcAverage(65, 54, 49);
console.log(koalasSc);

function checkWinner(avgDolhins, avgKoalas) {

    if (avgDolhins >= (2 * avgKoalas)) {
        console.log(`dolphin win(${avgDolhins} vs ${avgKoalas})`);
    } else if (avgKoalas >= (2 * avgDolhins)) {
        console.log(` koalas win(${avgKoalas})vs ${avgDolhins}`);
    }
    else {
        console.log("no team wins");
    }

}
checkWinner(dolphineSc, koalasSc);
//test 2


dolphineSc = calcAverage(85, 54, 41);
console.log(dolphineSc);
koalasSc = calcAverage(23, 34, 27);
console.log(koalasSc);
checkWinner(dolphineSc, koalasSc);


/*function caAv(a1, a2, a3) {
    const avg = (a1 + a2 + a3) / 3;
    return avg;
}
const avgLulusc = caAv(44, 23, 71);
const avgTssc = caAv(65, 54, 49);
console.log(avgLulusc, avgTssc);

function cWinnner(avgLuul, avgTsehaye) {
    if (avgLuul >= 2 * avgTsehaye) {
        console.log(`luul won (${avgluul}vs${avgTsehaye})`);
    }
    else if (avgTsehaye > +2 * avgLuul) {
        console.log(`tsehaye won (${avgTsehaye}vs${avgLuul})`);
    }
    else {
        console.log(`no win win`);
    }

}
cWinnner(avgLulusc, avgTssc);
*/

//
const calcAvg = (a, b, c) => (a + b + c) / 3;
let lakersSc = console.log(calcAvg(44, 23, 71));
let oaklandSc = console.log(calcAvg(65, 54, 49));

function checkWin(avgLake, avgOak) {
    if (avgLake >= (2 * avgOak)) {
        console.log(`lakkers win(${avgLake} vs ${avgOak})`);
    }
    else if (avgOak >= (2 * avgLake)) {
        console.log(`oakland win(${avgOak} vs${avgLake})`)
    }
    else { console.log(`there is no winner....`) }

}
//test2
checkWin(lakersSc, oaklandSc);

lakersSc = calcAvg(85, 54, 41);
console.log(lakersSc);
oaklandSc = calcAvg(2, 3, 28);
console.log(oaklandSc);
checkWin(lakersSc, oaklandSc);