console.log(null > 0);
console.log('    ');
console.log("3.1 Hello World");

//Hallo Welt ausgeben
console.log("Hallo Welt");
console.log('Hallo Welt');
console.log('Willkommen in Javascript');

//Definition mehrerer Variablen etc.
console.log('    ');
console.log('3.3 Definition Variablen');
//Zahl 5 in Konstante und 10 in Variable
const chap33 = 5;
var chap331 = '10';
console.log(chap33);
console.log(chap331);
var chap331 = 4;
console.log(chap331);
var chap3312 = "Hallo Variablen";
console.log(chap3312);
console.log(chap3312);
console.log(chap3312);

//Kap. 3.4 Operatoren
console.log('    ');
console.log('"Kap. 3.4 Operatoren"');

var ychap34 = 10;
var zchap34 = 2;

var xchap34 = ychap34 / zchap34;
console.log(xchap34);

var ychap34 = 20;
var zchap34 = 10;
var xchap34 = (ychap34 / zchap34) * 4;
console.log(xchap34);

var chap34name = 'Daniel';
console.log('Hallo ' + chap34name + ' !');

//Kapitel 3.6 String-Verkettungen
console.log('    ');
console.log('"Kapitel 3.6 - String-Verkettungen"');

let chap36name = "Zaji";
let chap36LastName = 'Yume';
console.log('Hello ' + chap36name + ' ' + chap36LastName);
console.log(`Hello ${chap36name} ${chap36LastName}`); // called a Template String
console.log('Hello ${chap36name} ${chap36LastName}'); // <- doesn't work, you need to use L'accent grave for templates!!!

//simple function - define and use
console.log('    ');
console.log('"3.8 Simple Funktionen definieren und nutzen"');

function chap38greetings(chap38name) {
    console.log(`Hallo ${chap38name}!`);
}
chap38greetings('Daniel');
chap38greetings('Vanessa');
chap38greetings('Herz');

function chap38addition(chap38x, chap38y) {
    return chap38x + chap38y;
}

function chap38sub(chap38x, chap38y) {
    return chap38x - chap38y;
}

function chap38mul(chap38x, chap38y) {                    // when you use return in a function you'll only be able to use ONE
    return chap38x * chap38y;
}

function chap38div(chap38x, chap38y) {
    return chap38x / chap38y;
}

console.log(chap38addition(20, 10));
console.log(chap38sub(20, 10));
console.log(chap38mul(20, 10));
console.log(chap38div(20, 10));

//alternative
console.log("   ");

function chap38math(chap38x, chap38y) {
    console.log(chap38x + chap38y);
    console.log(chap38x - chap38y);
    console.log(chap38x * chap38y);
    console.log(chap38x / chap38y);
}

chap38math(20, 10);