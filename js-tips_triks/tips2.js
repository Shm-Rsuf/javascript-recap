const arr = [1, 2, 3, 4, 5];

/* swap form temp variable */
// const temp = arr[0];
// arr[0] = arr[4];
// arr[4] = temp;
// console.log(arr);

// [arr[0], arr[4]]=[arr[4], arr[0]];
// console.log(arr);

/* copy text */
// function copyToClipBoard(str){
//   const element = document.createElement("textarea");
//   element.value = str;
//   document.body.appendChild(element);
//   element.select();
//   document.execCommand("copy");
//   document.body.removeChild(element);
// }

// function handleClick(){
//   let text = document.querySelector("#text");
//   copyToClipBoard(text.innerText);
// }

/* destructuring aliases */
// const language = {
//   name: "javascript",
//   founded:1996,
//   founder:"Brendan Eich"
// };

// const {name: languageName, founder: createrName}= language;

// console.log({languageName, createrName});

/* get value as data type */
// const element = document.querySelector("#number").valueAsNumber;
// console.log(element);

/* remove duplicate value from an array */
// const duplicateArr = [1, 2, 2, 1, 3, 4, 3, 5, 3, 4];

// console.log([...new Set(duplicateArr)]);

/* compare two array by value */
// const hasSameElement=(a, b)=>{
//   return a.length === b.length && a.every((val, i)=> val === b[i]);
// }

// console.log(hasSameElement([1, 3, 4],[1, 3, 4]));

/* suffling array */
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.sort(()=>Math.random()-.5));
// /* comma operator in javascript */
// let x = 1;
// x = (x++, x+3);
// console.log(x);

// const a = Array.from({ length: 10 }, () =>
//   Array.from({ length: 10 }, Math.random),
// A 10×10 array of random numbers

// for (let i = 0, j = 9; i <= 9; i++, j--) {
//   console.log(`a[${i}][${j}] = ${a[i][j]}`);
// }

/* ============== */
// console.log("Bangladesh".__proto__.__proto__.__proto__);

const myFunc = function(){
  console.log(arguments);
  return [].slice.call(arguments).sort();
}

console.log(myFunc(1, 4, 2, 5, 3));