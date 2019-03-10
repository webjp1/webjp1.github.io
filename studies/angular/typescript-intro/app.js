"use strict";
var hi = function (name) {
    console.log(name);
};
var wolverine = {
    name: 'Logan'
};
hi(wolverine.name.toUpperCase());
let message = "Hi";
// let message = "bye";
if (true) {
    let message = "Bye";
}
console.log(message);
const OWNER = "Jorge";
// OWNER = "Pirela";
if (true) {
    const Owner = "Pirela";
}
console.log(OWNER);
let itName = "Peter";
let itNumber = 123;
let itBoolean = true;
let itToday = new Date();
itToday = new Date(2019 - 3 - 10);
let spiderman = {
    name: "Peter",
    age: 20
};
spiderman = {
    name: "Parker",
    age: 12
};
let text = message + " " + spiderman.name + " " + "(" + spiderman.age + ")";
let text2 = `Hi ${spiderman.name} (${spiderman.age})`;
let text3 = `Hi ${spiderman.name} 
age: (${spiderman.age})`;
let text4 = `${1 + 2}`;
console.log(text);
console.log(text2);
console.log(text3);
console.log(text4);
let activate = function (who, object = "bat signal", when) {
    let message;
    if (when) {
        message = `${who} activated the ${object} at ${when}`;
    }
    else {
        message = `${who} activated the ${object}`;
    }
    console.log(message);
};
activate("gordon", "aquasignal", "late");
let myFunction = function (a) {
    return a;
};
console.log(myFunction("Regular"));
let myFunctionF = (a) => a;
console.log(myFunctionF("arrow"));
let myFunction3 = function (a, b = 0) {
    return a + b;
};
console.log(myFunction3(2, 5));
let myFunction3F = (a, b = 0) => {
    return a + b;
};
console.log(myFunction3F(2, 3));
let hulk = {
    name: "Hulk",
    smash() {
        setTimeout(() => {
            console.log(`${this.name} Smash!`);
        }, 1500);
    }
};
hulk.smash();
let avenger = {
    name: "Steve",
    key: "Captain America",
    power: "Drugs"
};
let AvName = avenger.name;
let AvKey = avenger.key;
let AvPower = avenger.power;
console.log(`
    Name: ${AvName}
    Key: ${AvKey}
    Power: ${AvPower}
    `);
let { name: nombre, key: clave, power: poder } = avenger;
console.log(`
    Name: ${nombre}
    Key: ${clave}
    Power: ${poder}
    `);
let avengers = ["Thor", "Tony", "Steve"];
let [thor, iroman, capi] = avengers;
console.log(thor, iroman, capi);
let prom1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Promess finished');
        resolve();
        // reject();
    }, 1500);
});
prom1.then(function () {
    console.log('Everything ok');
}, function () {
    console.error('Error');
});
