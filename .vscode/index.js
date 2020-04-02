/*let string = "strings";
let sentence = "Hello" + "Junshen";
let  sentence2 = " and Ema" ;
*/

//console.log(sentence + sentence2);
/*
let student1 = "Sandra" ;
let student2 = "Kelly" ;
let courseName = "AP Computer Science" ;
let teacherName = "Whalen" ;

const longSentence = `${student1} and ${student2} are amazing and will be taking ${courseName} with ${teacherName}` ; 
//Template Literal or Template String
*/

/*
//Numbers or integers
let year = 2020;
let nextYear = 2020 + 1;
let past = 2020 / 2;
let farFuture = 2020 * 50;
*/

/*

//Booleans
let trueStatement = true;
let falseStatement = false;
*/

//Null and undefined
//let undefined;
//let Ron; //let Ron but not defined Ron
//console.log(Ron);
//console.log(Sarah);

/*
//////Boolean Logic
let student = "Caroline"
let age = 15;
//console.log(age === "15");
//console.log (age < 17);
console.log(age <= 15 && age > 19);
*/

/*
/////If statements
let school = "High Sc";
if (school === "Elementary"){
    console.log("You are in k-5");
} else if (school === "Middle") {
    console.log("You are in 6, 7, or 8th grade");
} else {
    console.log("you are in HS");
}


/*
let ron = "Ron";
console.log(ron !== "Ema");
*/

// Homework !

//Stoplight

/* let light = "green";
if (light === "green"){
    console.log("Go");
} else if (light === "yellow") {
    console.log("Caution");
} else if (light === "red"){
    console.log("Stop");
}
 */

// Kristy and Bao Bao

/* let Kristy = 1;
let BaoBao = 0;
let coffee = Kristy + BaoBao;
if(coffee === 0){
    console.log("Almond Milk");
} else if (coffee === 1) {
    console.log("Milk and Almond Milk")
} else if (coffee === 2) {
    console.log("Milk");
} */

// Challenge

/*
let thermostat = 78;

if(thermostat < 68){
    console.log("Too Cold");
} else if(thermostat >= 68 && thermostat <=72) {
    console.log("Perfect");
} else if(thermostat >= 73 && thermostat <=76) {
    console.log("Warm");
} else if(thermostat > 76) {
    console.log("Too Hot");
}
*/

//functions

/*
function test() {
    console.log("TEST");
}
test();
*/

/* function argument(argument) {
    console.log(argument);
}
argument("argument");
console.log(add(10,3)); 

const hello = function() {
    alert("hello");
};
const bye = function() {
    alert("Bye");
};

const beatles = function(){
    hello();
    bye();
    hello();
    bye();
}
beatles();*/

////scope
/* 
function hello() {
    const name = "Sarah";
    function displayName(){
        alert(name)
    }
    return displayName();
}
hello(); */

/* const name = "Michael y"; //global space
function makeFunc(){
  const name = "Sarah";  //function scope
    function displayName() {
        console.log(name); //inner function can access outer function
    }
    return displayName;
}
const myFunc = makeFunc(); //// closure
myFunc(); */

/////arrays
/* const names = ["Diego", "Frid", "Christian", "Valerie", "Haoran"];
//names.push("Caroline");
//let newNames = names.unshift("Brian");
names.forEach(name => console.log(name));
names.filter(//somecode).forEach(el() => console.log(el)) */

/*
//spread operator
const numbers = [1, 2, 3, 4];

const add = function(x, y, z , f) {
    return x + y + z + f;
};
console.log(add(...numbers));
*/

//Challenge 1
/*
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
let result = students.filter(student => student.length < 5);
console.log(result);
*/

//Challenge 2

let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
//let result = students.includes("junshen");
//console.log(result);
function filter(){
    let names = ["Alan", "Savva"];
}
//console.log(students.some(filter));
console.log(students.some(name => name == "Savva" || name == "Alan"));
