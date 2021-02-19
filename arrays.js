//Arrays in java script

const names = ['luul', 'dave', 'sara', 'sami']//declaring and assinng array   ....arrays of names
console.log(names);//printing names to console
console.log(names.length);//to get the length of the array
console.log(names[0]);//arrays is zero based and this prints the first element in the array
console.log(names[names.length - 1]);//prints the last indexed element
names[3] = "MK";//this replace the last name sami 
console.log(names)

// array methods
//push(),pop(),unshift(),shift(),

const friends = ['mara', 'sali', 'song', 'kong'];

friends.push('green');//this method inserts the element at the last. outputs ["mara","sali", "song","kong","green"]

console.log(friends);

friends.pop();//this method remove the last element from the array  removed "green"
console.log(friends);//["mara","sali", "song","kong"]

friends.unshift('joe');//this method add the element in the front of the array before the first element
console.log(friends); //["joe","mara","sali","song","kong"]

friends.shift()//removes the first element from array   "joe" removed
console.log(friends);//["mara","sali","song","kong"]

console.log(friends.indexOf('song')); //indexOf()  method returns the index of th element, here songs index is 2.
console.log(friends.indexOf(friends[friends.length - 1]));//this out put the last element index  3.  index of kong
console.log(friends.includes("mara"));//this return true or false  true if the element in the array. false if not 

//eg
if (friends.includes("mara")) {
    console.log('you have friend named mara');
}
else {
    console.log('you  dont have friend named mara');
}
//coding challenge #2

/*
for (var x = 0; x < bill.length; x++) {
    const calcTip = (bill[x] <= 300 && bill[x] >= 50) ? tip[x] = bill[x] * 0.15 : tip[x] = bill[x] * 0.2;
    totals[x] = bill[x] + tip[x];
    console.log(tip.push(tip[x]));
    totals.push(totals[x]);

    //console.log(`the bill was ${bill[x]} and the tip is ${tip[x]} and the totals is ${bill[x] + tip[x]}`);

}
*/

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        let tip = bill * 0.15;
        return tip;
    }
    else {
        tip = bill * 0.2;
        return tip;
    }
}
const tip1 = calcTip(100);
console.log(tip1);//15

const bill = [125, 555, 44]
tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];//Array(3) [ 18.75, 111, 8.8 ]


console.log(tip);

const totals = [calcTip(bill[0]) + bill[0], calcTip(bill[1]) + bill[1], calcTip(bill[2]) + bill[2]];//Array(3) [ 143.75, 666, 52.8 ]


console.log(totals);

