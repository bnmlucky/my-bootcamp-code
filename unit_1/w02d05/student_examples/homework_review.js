const returnEle = () => {
  const objectR = {
    item1: "mango",
    item2: "apple",
    item3: ["pineapple", "apple"]
  };
  return objectR;
};
const arrayPull = returnEle();

console.log(arrayPull.item3[0]);
console.log(returnEle().item3[0]);
