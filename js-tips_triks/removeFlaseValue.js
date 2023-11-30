const mixedVlaue = ["🍊", "Hello", "🥟", true, false, "", 0];
const truthValue = mixedVlaue.filter(Boolean);

console.log(truthValue);

console.log(!!"hello");
console.log(!!10);
console.log(!!"");
console.log(!!undefined);
