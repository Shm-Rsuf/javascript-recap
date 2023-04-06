//01. Destructring arrays
/* const arr = [10, 20, 30, 40, 50];
const [fNum, secondNum, , fourNum] = arr;
console.log(fNum, secondNum, fourNum); */

//02. Destructring objects
/* const student = {
  fName: "Shm",
  lName: "Usuf",
  id: "D-16008",
};

const { fName, lName } = student;
console.log(fName, lName); */

//03. The Spread Operator (...)
const arr = [1, 3, 4, 5, 6, 9];
const newArr = [...arr];
newArr.pop();

console.log(arr);
console.log(newArr);
