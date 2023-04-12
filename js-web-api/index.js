// Numeric JavaScript + Common WebAPIs

// Math.abs()
// console.log(Math.abs(-1)); //1
// Math.ceil()
// console.log(Math.ceil(4.001));//5
// Math.floor()
// console.log(Math.floor(3.9));//3
// Math.round()
// console.log(Math.round(3.9)); //4
// console.log(Math.round(3.4)); //3
// Math.max()
// console.log(Math.max(...[5, 7, 3, 8, 4])); //8
// Math.min()
// console.log(Math.min(...[5, 7, 3, 8, 4])); //3
// Math.pow()
// console.log(Math.pow(2, 3)); //8
// console.log(3 ** 3); //27
// Math.sqrt()
// console.log(Math.sqrt(25));
// console.log(Math.floor(Math.sqrt(24)));
// Math.exp()
// Math.log()
// Math.sin()
// Math.cos()
// Math.tan()
// Math.random()
// console.log(Math.floor(Math.random() * 10 + 1));
// Math.trunc()
// console.log(Math.trunc(2.7)); //2
// console.log(Math.trunc(5.4)); //5

// new Date();
// const myDate = new Date();
// console.log(myDate);
// Date.now();
// console.log(Date.now());
// getDate();
// console.log(myDate.getDate());
// getDay();
// console.log(myDate.getDay());
// getFullYear();
// console.log(myDate.getFullYear());
// getHours();
// console.log(myDate.getHours());
// getMinutes();
// console.log(myDate.getMinutes());
// getSeconds();
// console.log(myDate.getSeconds());
// getMilliseconds();
// console.log(myDate.getMilliseconds());
// getMonth();
// console.log(myDate.getMonth());
// number.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
/* console.log(
  myDate.toLocaleString("bn-BD", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
); */

//currency formater
// const money = 149.95;
// const currencyFormater = money.toLocaleString("en-US", {
//   style: "currency",
//   currency: "EUR",
// });

// console.log(currencyFormater);

// parseInt();
// const width = "10.5px";
// const ans = parseInt(width);
// console.log(typeof ans);//10
// // parseFloat();
// const ans = parseFloat(width);
// console.log(ans); //10.5
