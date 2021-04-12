//loops in java script
//for loop ,while loop ,do while loop

//for loop ex
for (let rep = 1; rep <= 10; rep++) {
  // the loop excute till becomes false

  console.log(`lifting weight reptition ${rep} 🏋️`); //this prints 10 times
}

//eg lets create an array and excute and print using  for loop

const luulT = [
  "luul",
  "tesfay",
  "teacher",
  2020 - 1995,
  ["sabi", "eyob", "aron"],
  true,
]; // array created

const types = [];

for (let i = 0; i < luulT.length; i++) {
  //reading from luul array
  console.log(luulT[i], typeof luulT[i]); //prints all the value in the array  with its type  eg  luul  string
  //filling types array
  types[i] = typeof luulT[i]; // or we can use types.push(typesof luulT[i])
  //types.push(typesof luulT[i])// secound way of filling
}
console.table(types); //[ "string", "string", "string", "number", "object", "boolean" ]

// if we want to create new  empty array and fill it based on the above "luulT" array

// we first create new empty array  above the for loop , lets name it  "types"
// then inside the for loop block we  but the code  types[i]=typeof luulT[i]; then  console.log(types)

//another eg   create yearofbirth array and calculate element of this array  and  create new array name age and fill it with th calculated ages

const yearsOfbirth = [2000, 1997, 1970, 2015];
const ages = []; //[ 37, 40, 67, 22 ] filled with after calculation

for (let i = 0; i < yearsOfbirth.length; i++) {
  ages.push(2037 - yearsOfbirth[i]);
}
console.log(ages);

//another important statement  is continue  and  break
// continue  exit iterate and continue to the next iteration for eg

console.log("---only String---");
// this function only prits string
for (let i = 0; i < luulT.length; i++) {
  if (typeof luulT[i] !== "string") continue; // this means if the element in  the array luulT is string then print it if not exit and skip to the next
  console.log(luulT[i], typeof luulT[i]); //output  luul string, tesfay string ,teacher string
}

//break statement
console.log("--- break with number---");
for (let i = 0; i < luulT.length; i++) {
  if (typeof luulT[i] === "number") break; //this break statement  exit the excection  completely from the loop when equals with a number
  //even if in the array more than one numbers then it completely terminate  once equals with the  first  number
  console.log(luulT[i], typeof luulT[i]); //this gives as an out put of an elements that exixsts   before the first number is much
  //eg  if the array is   cons luul=['dave','true',23,'blue', 20]// this out put only dave and true then program terminated
}

//looping back word    new  eg

const luulNe = [
  "luul",
  "tesfay",
  "teacher",
  2020 - 1995,
  ["sabi", "eyob", "aron"],
  true,
];

for (let i = luulNe.length - 1; i >= 0; i--) {
  //this iterare the array backword
  console.log(i, luulNe[i]);
}

//loop inside loop

// lets  print out  3 diferent exersices     each reptition of 5   which means 15 rep

for (let exersice = 1; exersice < 4; exersice++) {
  // prints exercise 1 2 and 3
  console.log(`----- starting Excercise...${exersice}🏆`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exersice}: Lifting weight reptition... ${rep} 🏋️‍♂️`);
  }
}

// the while loop    lets compare  with pervious example of for loop

//pervious example of for loop
for (let rep = 1; rep <= 10; rep++) {
  // the loop excute till becomes false

  console.log(` forloop: lifting weight reptition ${rep} 🏋️`); //this prints 10 times
}

// lets convert it to while loop
rep = 1; //declare the intialization before the while loop
while (rep <= 10) {
  //this means  execute the satement wihile rep is true
  console.log(` whileLoop: lifting weight reptition ${rep} 🏋️`); //this prints 10 times
  rep++; //then we put counter rep
}

//note  while loop is not depend on counters    in the above example we put counter becouse we need it
/*but  with But all the while loop really needs is the condition

which needs to stay true for it to keep running.

And that condition can be any condition,*/

//eg
//So a problem without any counter, without a number that is increasing.but instead it will depend on a random variable, okay.

/*So what we're gonna do is to basically roll a dice

and then keep rolling the dice until we roll a six.

And then when we roll a six, we stop.

So essentially we will want to keep running the loop

while the rolled dice is different from six.

And so in this case,

we do actually not know beforehand

how many times the loop should run.

And so we don't need a counter variable

and that's exactly the use case of a while loop.*/

// Math.random()  this will create a number between zero and one  then multiply by *6 (Math.random() * 6)
//but this is gonna be a decimal number. and so now we need to get rid of this decimal part.And so that we do using Math.trunc,
/*and so this will give us a number between zero and five    (Math.trunc(Math.random() * 6))
and then we add one and get one to six. Math.trunc(Math.random() * 6) + 1;*/

let dice = Math.trunc(Math.random() * 6) + 1; //  we truncate the random numbers to whole numbers between 1 and 6

while (dice !== 6) {
  // so if we roll the number six then the  while loop exit  note: if the rolling at first accured to 6 then the while loop never start
  console.log(`you rolled a dice ${dice}`); //printed out when number of accurance between 1 and 5  but not six
  dice = Math.trunc(Math.random() * 6) + 1; // we  but this to continue the rolling if we dont put this the program runs infnitely

  if (dice === 6) {
    console.log("the rolling about to exit ...");
  }
  //to see the result we kee continue to run the browser many times
}

// codding challenge #4

function calcTips(billss) {
  if (billss >= 50 && billss <= 300) {
    return billss * 0.15;
  } else {
    return billss * 0.2;
  }
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tipss = calcTips(bills[i]);
  tips.push(tipss);
  total.push(bills[i] + tipss);
}
console.log(bills, tips, total);

function calcAVerage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;

  return avg;
}

console.log(calcAVerage(total));
console.log(calcAVerage(tips));
console.log(calcAVerage(bills));

// section #5 challanege number1

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in + ${i + 1} days...`;
  }
  console.log("..." + str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

//practice

// per day 7m  and per night -2 m    depth 30   from sololern

let sum = 0;
let distPerDay = 0;
let distPerNight = 0;
let depth = 42;
let days = 0;

for (let i = 2; i <= depth; i += 5) {
  days += 1;
  distPerDay += 7;
  distPerNight -= 2;
  sum = distPerDay + distPerNight;
}

if (sum > depth) {
  console.log(`the snail will be out in ${days} days`);
} else {
  console.log(`the snail is still inside the wall`);
}

// sum>depth?`${days}`
console.log(distPerDay, distPerNight);
console.log(days, sum);

//7 14 21 28 35 42 49
//0 5 10  15 20 25 30
