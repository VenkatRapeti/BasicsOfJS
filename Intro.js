function external_exec() {
    alert("Welcome to Edureka External...");
}

// **************************  Variables *************************

// variable - pointer to memory location

var a = 10;

// In all prog lang - tightly coupled with the data type

// In JS - loosely coupled  

var b;
typeof (b);  // Undefined

b = 20;
typeof (b);   // Number 

b = 'shubham';
typeof (b);   // String 


// ****************************  Data Types ****************************

/* 2 Types ->

    > Primitive DT
        > Number
        > String
        > Boolean
        > Undefined
        > Null

    > Reference DT
        > Arrays
        > Objects
        > Functions */

// *****************   Number  ***************************

var a = 20;
var b = 20.6666;

// *****************   String  ***************************

var name = "shubham";
var city = 'Delhi';
var num = "20.89";

// *****************   Boolean   ***************************

var isVaccinated = false;
var isEligibleForVoting = true;

// *****************    Undefined vs Null  ***************************

var a;
a;             //  undefined
typeof (undefined);    // Undefined


var num = 20;
var num = null;  // null 
typeof (null);   // Object  OR    {}


// *********************************  Arrays *****************************

var marks = [90, 78, 68, 46];  // Array of Numbers 

var students = ["Shubham", "Aakash", "Aarti"];   // Array of String 

// *********************************  Object *****************************

var student1 = {
    name: "Shubham",
    age: 29,
    address: "Shalimar Bagh, Delhi",
    percentage: 80,
    isVaccinated: true
};

// Array of Objects 

var studentsClass = [
    {
        name: "Shubham",
        age: 29,
        address: "Shalimar Bagh, Delhi",
        percentage: 80,
        isVaccinated: true
    },
    {
        name: "Aarti",
        age: 29,
        address: "Shalimar Bagh, Delhi",
        percentage: 80,
        isVaccinated: true
    },
    {
        name: "Shardul",
        age: 29,
        address: "Shalimar Bagh, Delhi",
        percentage: 80,
        isVaccinated: true
    }
]

// *****************************  Functions **************************

function sum(num1, num2) {
    return num1 + num2;
}

// Arrow functions

sum = (num1, num2) => {
    return num1 + num2;
}

() => { }

sum(2, 3);  // 5
sum(5, 6);  // 11

// ****************************  Operators  ********************************

/*
    > Arithemetic
    > Assignment
    > Logical
    > Comparison
*/

// >>>>>>>>>>>>>>>>> Arithemetic >>>>>>>>>>>>>>>>

var num1 = 5;
var num2 = 3;

num1++;

var res = num1 + num2;   // 8
var res = num1 - num2;   // 2
var res = num1 * num2;   // 15
var res = num1 / num2;   // 1
var res = num1 % num2;  // 2


// >>>>>>>>>>>>>  Assignment  >>>>>>>>>>>>>>>>>>>>>>>

var name = "Shubham";

var num = 3;

var num = num + 2;
num += 2;

var num = num - 2;
num -= 2;

var num = num * 2;
num *= 2;

var num = num / 2;
num /= 2;

var num = num % 2;
num %= 2;

// **************************  Comparison ******************************

3 == 3;  // true    // only comapres value

3 === 3;  // true   // comapres value + data type 

"3" == 3;  // true

"3" === 3;  // false

5 > 4 // true
6 < 9 // true
3 >= 3 // true
5 <= 5 // true

    // ******************  Logical **********************

    (5 > 4) && (7 > 6)     // true && true = true

true && true  // true 
true && false // false
false && true // false
false && false // false

true || true  // true 
true || false // true 
false || true // true 
false || false // false

!true // false 
!false // true 

// *******************************  I/O Statements ***************************

// Output Statements 

// console.log 

function consoleOutput() {
    console.log("Hi...");
}

// Alert

function alerts() {
    alert("Hi...");
}

// Inner HTML 

function inner() {
    var elemnt = document.getElementById("one");
    elemnt.innerHTML += " Shubham";
}

// document.write

function doc() {
    document.write("Welcome to Edureka...");
}


// Input Statements 

// prompt

function printName() {
    var name = window.prompt("Plz provide your name ?");
    var elemnt = document.getElementById("one");
    elemnt.innerHTML += name;
}

// confirm + DOM Manipulation

function deleteOption() {
    var response = window.confirm("Are you sure, you want to continue ?");
    if (response) {
        var elemnt = document.getElementById("two");
        elemnt.setAttribute('style', 'display:none');
    }
    else {
        alert("Its not deleted, plz continue...");
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>  Data Structures >>>>>>>>>>>>>>>>>>>>

/*
    > Arrays
    > Objects
    > Strings
*/

// *****************************  Arrays  **********************************

// homogeneos Data Structures - LIFO  - Last In First Out

var arr = [1, 2, 3, 4, 5];

arr.push(6);   // [1, 2, 3, 4, 5, 6];

arr.pop();    // [1, 2, 3, 4, 5];

arr.unshift(0);   // [0, 1, 2, 3, 4, 5];

arr.shift();   // [1, 2, 3, 4, 5];

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

arr1.concat(arr2);  // [1, 2, 3, 4, 5, 6];

for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

// 1 2 3 4 5 6

// ***********  map  ***************** 

var arr = [1, 2, 3, 4, 5, 6];

arr.map((item) => { return item * 3 });

var res = arr.map(item => item * 3);

res;  // [3, 6, 9, 12, 15, 18];
arr; // [1, 2, 3, 4, 5, 6];


// *****************  filter *****************

var arr = [1, 2, 3, 4, 5, 6];

arr.filter((item) => { return item % 2 == 0 });  // [2,4,6]

var res = arr.filter(item => item % 2 == 0);   // [2,4,6]

res; // [2,4,6]
arr; // [1, 2, 3, 4, 5, 6];

arr.map((item) => {
    if (item % 2 == 0) {
        return item;
    }
})

// ******************  find  ***********************

var arr = [1, 2, 3, 4, 5, 6];

arr.find(item => item % 2 == 0);  // 2

var testArr = [100, 200, 300, 400, 500];

testArr.filter(item => item < 20);  // []
testArr.find(item => item < 20);  //  undefined

// *****************  slice & splice **********************

var arr = [1, 2, 3, 4, 5, 6];

arr.slice(1, 4);  // [2,3,4]

arr.splice(2, 2);  // [1, 2, 5, 6];

// ******************  sort *************************

var arr = [1, 2, 3, 4, 5, 6];

arr.sort((a, b) => a - b);  // Ascending 
arr.sort((a, b) => b - a);  // Descending


// ********************************  Loops  *************************************

for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

// *************  while ***************

var i = 0;

while (i <= 10) {
    console.log("Shubham");
    i++;
}    // 11 times

// ******************************  Conditions ***********************************

// if condition

var age = 30;

if (age > 18) {
    console.log("Eligible for Voting");
}

// if-else condition

if (age > 18) {
    console.log("Eligible for Voting");
}
else {
    console.log("Not Eligible for Voting");
}


// ****************  Switch Statements **************************

var color = 'red';

switch (color) {
    case 'blue':
        console.log("Blue");
        break;
    case 'green':
        console.log("Green");
        break;
    case 'red':
        console.log("Red");
        break;
    default:
        console.log("No color matches...");
}

// Red

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Objects >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


var obj = {
    name: "Aarti",
    age: 29,
    address: "Shalimar Bagh, Delhi",
    percentage: 80,
    isVaccinated: true
};

Object.keys(obj);   // [ 'name', 'age', 'address', 'percentage', 'isVaccinated' ];
Object.values(obj);  // ['Aarti', 29, "Shalimar Bagh, Delhi", 80, true];

// **********************************   Classes  *************************

// Class is a blueprint of an Object 
// Class contains Data Members & Member Functions 
// constructor is special function within a class 
//    > same name as of the class
//    > use to initialize the DM of the class 

class Students {
    constructor(studentArr) {
        this.studentsList = studentArr;
    }

    printNames = () => {
        return this.studentsList.map(item => item.name);
    }

    studentsByCity = (cityName) => {
        return this.studentsList.filter(item => item.city == cityName);
    }
}

var studentObj = new Students();
studentObj.printNames();               // ["Aarti", "Shubham", "Aakash"]
studentObj.studentsByCity("Delhi");

/* [
        {
            name: "Aarti",
            age: 29,
            city: "Delhi"
        }, {
            name: "Shubham",
            age: 30,
            city: "Delhi"
        }
    ]
*/

var studentObj1 = new Students([
    {
        name: "Aarti",
        age: 29,
        city: "Delhi"
    }, {
        name: "Shubham",
        age: 30,
        city: "Delhi"
    }, {
        name: "Aakash",
        age: 27,
        city: "Mumbai"
    }]);

studentObj1.printNames();


var studentObj2 = new Students([
    {
        name: "Harshit",
        age: 29,
        city: "Delhi"
    }, {
        name: "Shubhi",
        age: 30,
        city: "Delhi"
    }, {
        name: "Manish",
        age: 27,
        city: "Mumbai"
    }]);

studentObj2.printNames();

// >>>>>>>>>>>>>>>>>>>>>  Assignment -3 >>>>>>>>>>>>>>>>>>>>>>>>

var orderData = {
    'Below 500': 38,
    '500-1000': 21,
    '1000-2000': 34,
    'Above 2000': 64
};

var arr = [1, 2, 3, 4, 5];

arr.reduce((a, b) => a * b, 1);  // 120

a = 120;
b = 5;

var sum = Object.values(orderData).reduce((a, b) => a + b, 0);  // 157;

Object.keys(orderData).length;  // 4

Object.keys(orderData).map((item, index) => {
    return {
        id: index + 1,
        propotion: item,
        percentage: ((orderData[item] / sum) * 100).toFixed(2),
        restaurant: "Punjabi Tadka"
    }
})

// >>>>>>>>>>>>>>>>>>>>>>>  Strings  >>>>>>>>>>>>>>>>>>>>>>>>>

// '' or " "
// Array of Characters 

var myName = "Shubham Arora";

var myName = ["S", "h", "u", "b", "h", "a", "m"];

myName.charAt(4);  // "h"

myName.indexOf('h');  // 1
myName.lastIndexOf('h');   // 4

myName.split(' ');  // ["Shubham", "Arora"]

myName.split('');  //  ["S", "h", "u", "b", "h", "a", "m", " ", "A", "r", "o", "r", "a"];

var elementName = "element_div_34";

var elementId = elementName.split("_")[2];

var LN = myName.substr(8, 5);
var FN = myName.substring(0, 6);

myName.split('').map((item) => {
    console.log(item);
})

if (myName.indexOf('@') == -1) {
    console.log("@ is not present")
}
else {
    console.log("@ is present")
}

// >>>>>>>>>>>>>>>>>>>>>  Math  >>>>>>>>>>>>>>>>>>>>>


// All the data members and member functions of Math Class are static  

Math.sqrt(9);  // 3
Math.random();
Math.pow(2, 10);  // 1024
Math.ceil(3.1);  // 4
Math.floor(9.8);  // 9


var r = 20;

var Area = Math.PI * Math.pow(r, 2);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>  Date  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// All the data members and member functions of Date Class are non-static  

var date = new Date();

date.getDate();
date.getDay();  // Saturday
date.getFullYear();  // 2021
date.getMonth();  // 09
date.getTime();

// >>>>>>>>>>>>>>>>>>>>>>>>   ES  >>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ES - EcmaScript - ES is a community for JS which sets the Rules/Regulations that we need to follow while working with JS 

// All the features are introduced by this community

// ES2005 - ES5
// ES2015 - ES6
// ES2016 - ES7

/* New Features of ES6 -
    > Template String
    > Let, Var & Const
    > Classes
    > This keyword
    > Arrow functions
    > Default Params
    > IIFE
    > Query String
    > Object Destructuring
    > Ternary Operator
    > Hoisting
    > Callback Functions
    > Promises
    > Async/Await
    > Concise Functions
    > Spread Operator
    > Rest Operator   */

// >>>>>>>>>>>>>>>>>>>>>>>   Ternary Operator   >>>>>>>>>>>>>>>>>>>>>>>>

// alternative for if-else

var age = 29;
var isEligibleForDriving;

if (age > 18) {
    isEligibleForDriving = true;
} else {
    isEligibleForDriving = false;
}

var isEligibleForDriving = age > 18 ? true : false;

// >>>>>>>>>>>>>>>>>>>>>>>>  Arrow functions  >>>>>>>>>>>>>>>>>>>>>>>>>

// ES5

function sum(a, b) {
    return a + b;
}

// ES6

var sum = (a, b) => {
    return a + b;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Object Destructuring   >>>>>>>>>>>>>>>>>>>>>>>>>>>>

var obj = {
    name: "Shubham",
    rollNo: 1,
    city: "Delhi"
};

var names = obj.name;
var city = obj.city;

var { name, city, id } = obj;

console.log(name);   // "Shubham"
console.log(id);     // undefined

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Template String   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var s1 = "Hello";
var s2 = 'how are you';
var s3 = 'Will catch up tomorrow';

var output = 'Hello, How are you ?, Will catch up tomorrow';

var output = s1 + ',' + ' ' + s2 + " " + '?,' + " " + s3;

/* Backtick usage - 
    > Conactenation of Strings 
    > Multi line Strings */

var output = `${s1}, 
${s2} ?, 
${s3}`;


// >>>>>>>>>>>>>>>>>>>>>>>>>>>   Default Params   >>>>>>>>>>>>>>>>>>>>>>>>>>>

function sum(a, b) {
    return a + b;
}

sum(2, 3);  // 5

sum(2);

// ------------------------------------------------------

function sum(a, b = 8) {
    return a + b;
}

sum(2, 3);  // 5
sum(4);     // 12

// other - Error 
// JS - NaN


// >>>>>>>>>>>>>>>>>  String Manipulation  >>>>>>>>>>>>>>>>>>>>>>>

var sum = 2 + 4 + 6;   // 12

var sum = 'Hello' + 2;  // 'Hello2'

var sum = '2' + 4 + 6;  // '246'

var sum = 2 + '4' + 6;  // '246'

var sum = 2 + 4 + '6';  // '66'

var sum = 2 + undefined;  // NaN

var sum = '2' + undefined;  // 2undefined


// >>>>>>>>>>>>>>>>>>>>  Query String  >>>>>>>>>>>>>>>>>>>>>>>>>>>

'?id=34&name="shubham"'

// >>>>>>>>>>>>>>>>>>>  Web Storage >>>>>>>>>>>>>>>>>>>

sessionStorage.setItem('userName', 'Shubham');
sessionStorage.getItem('userName');   // 'Shubham'


localStorage.setItem();
localStorage.getItem();


// >>>>>>>>>>>>>>>>>>>>>  SetTimeOut  &  SetInterval  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Scheduling Methods 

function sum(a, b = 8) {
    return a + b;
}

sum(2, 3);  // 5

setTimeout(sum, 10000);   // 1000 ms = 1 sec

var interval = setInterval(sum, 10000);

clearInterval();

// >>>>>>>>>>>>>>>>>>>>>     Concise Functions   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ES5
var obj = {
    sum: function () {

    }
}

obj.sum();

// ES6
var obj = {
    sum() {

    }
}

// >>>>>>>>>>>>>>>>>>>>    Spread Operator  & Rest Operator  >>>>>>>>>>>>>>>>>>>>>>>>

// Rest Operator

function sum(a, b) {
    return a + b;
}

sum(2, 4);


function sum(a, b, ...c) {
    return a + b + c.reduce((a, b) => a + b, 0);
}

sum(2, 4);

// Spread Operator 

// Reference DT   * Replica * Concat 

// Replica of Reference DT 

var obj = {
    name: "shubham",
    age: 30,
    city: "delhi"
}

var copyObj = obj;  // fails

var copyObj = { ...obj };

var arr = [1, 2, 3];

var copyArr = [...arr];

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var finalArr = [...arr1, ...arr2];   // [1,2,3,4,5,6]


// ************************  Assignment - 4  *****************************

var ratingsData = [
    { name: "KFC", rating: 4 },
    { name: "BK", rating: 3 },
    { name: "Dominos", rating: 5 },
    { name: "KFC", rating: 2 },
    { name: "Dominos", rating: 3 }
];

// Steps - 1 : Get All the Unique Restaurants from ratingsData like ["KFC", "BK", "Dominos"]

var uniqueRestaurants = ratingsData.map(item => item.name).filter((value, index, self) => {
    return self.indexOf(value) === index
});

// ["KFC", "BK", "Dominos"]

// Step-2 : Iterate the uniqueRestaurants and filter the original Array

uniqueRestaurants.map((abc) => {
    const filteredRestaurants = ratingsData.filter(item => item.name == abc);
    return {
        name: restaurant,
        averageRating: (filteredRestaurants.reduce((a, b) => a + b.rating, 0) / filteredRestaurants.length).toFixed(2)
    }
})

// >>>>>>>>>>>>>>>>>>>>   Event Handling   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function onOver() {
    var element = document.getElementById("three");
    element.setAttribute('style', 'background-color: red');
}

function onOut() {
    var element = document.getElementById("three");
    element.setAttribute('style', 'background-color: green');
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>   Hoisting   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// bottom to upward direction - var variable declartion

var age;
console.log(age);  // undefined
var age = 30;

const age = 30;
if (true) {
    let a = 20;
}
console.log(a);  // 20

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Let & Const  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Drawbacks of Var

// var is global access variable
// var doesn't follow the block boundaries
// var also follows variable hoisting

// var - global scoped & Mutable
// let - block scoped & Mutable
// const - block scoped & Primitive DT - Immutable

// Reference DT
const arr = [1, 2, 3];
arr.push(4);               //  [1,2,3,4]


const a = 20;
a = 30;             // Error

const a;
a = 30;             // Error

const a = 20;

var a = 20;
if (true) {
    let a = 10;

} else {
    let a = 30;
}

// a = 20;


//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>   Async Programming   >>>>>>>>>>>>>>>>>>>>>>>>>

// Sync - Code Exceution doesn't wait 
// Async - waits for block 

// UI Code which is responsible for data binding in DD -> 
// will only execute after we recieve the server API response ( 5ms - 5s )

// > Callback
// > Promises
// > Async await 

// >>>>>>>>>>>>>>>>>>>>>>>>>  Promises  >>>>>>>>>>>>>>>>>>>>>>>>>>>>

/*  3 states --> 
        > Pending 
        > Resolved
        > Rejected */


// API - response   // 5ms 
if (response) {
    // UI logic
} else {
    // No UI logic
}

// http response status Codes  
// 200 - success,  500 - server error

axios('url').then((res) => {
    // UI logic using res
}
).catch((err) => {
    // No UI logic
    // Showcasing that err to end user
})

// >>>>>>>>>>>>>>>>>>>>>  Callbacks   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function calc(num1, num2, operationType) {
    switch (operationType) {
        case 'add':
            return num1 + num2;
            break;
        case 'sub':
            return num1 - num2;
            break;
        case 'mul':
            return num1 * num2;
            break;
        case 'div':
            return num1 / num2;
            break;
        default:
            return 'operation type not supported'
    }
}

calc(3, 6, 'add');  // 9

//...........................................................................

function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

function mod(a, b) {
    return a % b
}

function calc(a, b, callback) {
    return callback(a, b);
}

calc(3, 6, add);   // 9

// add - callback function
// calc - higher order function

// ..........................................  Async & await .........................................

async function API(callback) {
    // Call the API 
    const response = await axios();
    if (response) {
        callback();
    }
}

function bind() {
    // UI Binding Logic
}

API(bind);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>  this >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Students {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        return this.name;
    }
}


function main() {
    var abc = 10;

    if (true) {
        var abc = 9;
        this.abc;
    }

    this.abc;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Exception handling  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Exception - Runtime Errors 

// Compile - Spelling Mistakes 
// RunTime - Divide By Zero 
// Logic - Sum () { a - b };

async function API(callback) {
    // Exception handling
    try {
        const response = await axios();
        if (response) {
            callback();
        }
    }
    catch (e) {
        console.log(e);
    }
    finally {
        // Always Execute
    }

}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>  IIFE  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// IIFE - Immediately Invokable Function Expressions

(function sum() {

})()

// Scenario - Need to invoke a fn immediately
























































