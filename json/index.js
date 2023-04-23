const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Data not fetched");
  const data = await res.json();
  console.log(data);
};
getData();
