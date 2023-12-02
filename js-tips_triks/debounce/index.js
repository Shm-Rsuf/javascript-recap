// const btn = document.getElementById("button");

// function debounce(fn, delay){
//   let timeOutId;
//   return function(){
//     if(timeOutId){
//       clearTimeout(timeOutId);
//     }
//     timeOutId = setTimeout(() => {
//       fn();
//     }, delay);
//   }
// }

// btn.addEventListener("click",debounce(function(){
//   console.log("clicked");
// },500))

/* =============== */
// const fruits = ["🍎", "🍓", "🍅", "🍎", "🍓", "🍅", "🍎"];

// function countFruitNumber(data){
// const output = {};
// data.forEach(d=> output[d]= (output[d] || 0) + 1);
// return output;
// }

// console.log(countFruitNumber(fruits));

// const str = "I Love Bangladesh";

// function reverseWord(data){
//  const dataAsArray = data.split(" ");
//  let result = dataAsArray.map(d=>d.split("").reverse().join(""));

//  return result.join(" ");
// }


// console.log(reverseWord(str))


const str = "javascript is a popular programming language";

function sortByWord(data){
const dataAsArray= data.split(" ");

return dataAsArray.sort((a, b)=>a.length - b.length).join(" ");

}

console.log(sortByWord(str));