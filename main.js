const myArray = [
    "Water",
    "Milk",
    "Banana",
    "Chicken",
    "banana",
    "water"
];

// const loewrCaseMyArray = myArray.map((element) => {
//     return element.toLowerCase();
// });

const loewrCaseMyArray = myArray.map(element => element.toLowerCase());

// const string = loewrCaseMyArray.toString();
// console.log(string);

// console.log(loewrCaseArray);

// const myList = _.chunk(loewrCaseMyArray, 3);
// const myList = _.difference(loewrCaseMyArray, ["water", "banana"]);
// const myList = _.difference(loewrCaseMyArray, ["milk", "chicken"]);
// const myList = _.join(loewrCaseMyArray, "||");
// const myList = _.without(loewrCaseMyArray, "water", "chicken");
const myList = _.uniq(loewrCaseMyArray);

// console.log(typeof myList);
console.log(myList);