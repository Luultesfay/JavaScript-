
//Objects  
//eg
//in objects order dosent matter but in arrays do
/*objects in JavaScript
 may be defined as an unordered collection of related data, 
 of primitive or reference types, in the form of “key: value” pairs.*/
const luul = {//object literal syntax {}
    firstName: 'luul',//(property) key: value
    lastName: 'Negasi',
    city: 'san fra',
    state: 'cali',
    age1: 28,
    friends: ['aron', 'dave', 'sami']//we can store arrays in side object

}

console.log(luul.firstName);//accesing the property using '.' notation outputs  luul
console.log(luul['firstName']);//accessing thge property using [] notation outputs luul
console.log(luul.lastName);

const luulLikes = prompt('what do you want to know about luul?choose between firstName,lastName,age,job ');
console.log(luul[luulLikes]);// undefined means false when we put property that is not exist in object


//eg

if (luul[luulLikes]) {
    console.log(luul[luulLikes]);
}
else {//if we put property that is not exist in this  object we get undefined 
    console.log('wrong request!choose between firstName,lastName,age,job');
}

//addig proberty to the object  we can use '.' operator or [] notation

luul.job = 'coder';// job :'coder' is added to the object list
luul['gmail'] = 'lulu@gmail.com';//added to the object list
console.log(luul);//the new object is   Object { firstName: "luul", lastName: "Negasi", city: "san fra", state: "cali", age1: 28, friends: (3) […], job: "coder", gmail: "lulu@gmail.com" }

//challenge
//print this   "luul has 3 friends,and his best friend is called aron"

const bestFriend = `${luul.firstName} has ${luul.friends.length} friends, his best friend is called ${luul.friends[0]}`

console.log(bestFriend);

//objects can also hold functions 
//eg

const jonas = {
    fName: 'jonas',
    lName: 'ee',
    job: 'teacher',
    birthYear: 1991,
    friEnd: ['katie', 'sabi', 'sali'],
    hasDriversLicense: true,
    //calcAge: function (birthYear) {// function value   and a method property  ... this is valid becouse its function expresstion and produce value
    //return 2037 - birthYear;

    /*function calAge(birth year)
    return 2037-birtyhyear*/  // this is ivalid becouse this is function decleration

    //alternative
    // note:  the  "this" keword is refers to "object"   so object=this;
    // "this" key  word is  most important when  the object name is change but  the "this" keword not changes  so  we can acess the element even the object is changed.

    /* calcAge: function () {
         console.log(this); //outputs the   Object { fName: "dd", lName: "ee", birthYear: 1991, friEnd: (3) […], hasDriversLicense: true, calcAge: calcAge() }
         return 2037 - this.birthYear;*/

    //we can also calculate the age and  create property using  "this.age"=="jonas.age" and store the calulatedage in the created age property  
    calcAge: function () {
        this.age = 2037 - this.birthYear;//  here the proberty age is created & also age is calculated and assined to it
        return this.age;

    },
    getSummery: function () {

        return `${this.fName} is a ${jonas.calcAge()} old ${this.job}, and he has ${(this.hasDriversLicense) ? 'a' : 'no'} driver licence`
    },

}
//console.log(jonas.calcAge(1991));//out put 46
//console.log(jonas['calcAge'](1991));//out put 46

//alternative  that goes with  'this"
console.log(jonas.calcAge());//out put 46
console.log(jonas['calcAge']());//out put 46

//out put for the created  this.age 

console.log(jonas.age);//out put 46   becouse this refers to jonas the object

//challenge   print  "jonas is a 46-years old teacher, and he has a driver license"

console.log(jonas.getSummery());


// coding challenge #3
const markMiller = {
    firstLName: 'Markmiller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.weight / (this.height ** 2);
        return this.BMI;

    }

}
console.log(markMiller.calcBMI());


const johnSmith = {
    firstLName: 'johnsmith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.weight / (this.height ** 2);
        return this.BMI;

    }

}

console.log(johnSmith.calcBMI());
//first approch to solve the challenge
console.log(`${johnSmith.calcBMI() > markMiller.calcBMI() ? johnSmith.firstLName + (johnSmith.calcBMI()) : markMiller.firstLName + (markMiller.calcBMI())} is higher than ${johnSmith.calcBMI() > markMiller.calcBMI() ? markMiller.firstLName + (markMiller.calcBMI()) : johnSmith.firstLName + (johnSmith.calcBMI())}`);
//secound approch
if (markMiller.BMI > johnSmith.BMI) {
    console.log(`${markMiller.firstLName}'s BMI (${markMiller.BMI}) is higher than ${johnSmith.firstLName}'s (${johnSmith.BMI}) !`);

} else if (johnSmith.BMI > markMiller.BMI) {
    console.log(`${johnSmith.firstLName}'s BMI (${johnSmith.BMI}) is higher than ${markMiller.firstLName}'s (${markMiller.BMI}) !`);

}
