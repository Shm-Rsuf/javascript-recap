"use strict";
/* remove false value */
// const mixedVlaue = ["🍊", "Hello", "🥟", true, false, "", 0];
// const truthValue = mixedVlaue.filter(Boolean);

// console.log(truthValue);

/* convert boolean */
// console.log(!!"hello");
// console.log(!!10);
// console.log(!!"");
// console.log(!!undefined);

/* convert single layer of array */
// const arr = [1, 2, [3, 4], 5, [6, [7, 8,[9, 10]]]];
// const flatArr = arr.flat(Infinity);
// console.log(flatArr);

/* replace all occurance of strings */
// const quote = "React is a js framework. This framework is the most popular framework right now"

// console.log(quote.replace(/framework/g,"library"));

/* console log */
// let value1 = "React";
// let value2 = "javascript";

// console.log({value1});
// console.log({value2});

/* to know performance of any task */

const startTime = performance.now();

for(let i = 1; i<=10; i++)
{
  console.log(i);
}

const endTime = performance.now();

console.log(`The answer is : ${endTime - startTime}`);