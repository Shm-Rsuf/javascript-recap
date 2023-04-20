"use strict";
const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Response failed");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

getProducts();
