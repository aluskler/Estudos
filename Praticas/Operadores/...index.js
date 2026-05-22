const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop();
townsCopy.pop();
townsCopy.push("Juno");

console.log({ towns, townsCopy });

const townsClone = [...towns];

townsClone.push("Aldebaran");

console.log({ towns, townsCopy, townsClone });

const townsObj = { ...towns };
const townsObjClone = { ...townsObj };

townsObjClone.test = "Test";

console.log({ townsObj, townsObjClone });

////////////////////////////////////////////////////////////
function sum(...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2));
console.log(sum(32, 5, 74, 7, 1, 9, 90));

function sum(...numbers) {
  return numbers.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(sum(2, 3));
