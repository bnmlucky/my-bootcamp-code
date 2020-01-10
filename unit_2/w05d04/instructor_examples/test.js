const firstFunction = () => {
  console.log('First function running');
  secondFunction();
};
firstFunction();

const secondFunction = () => {
  console.log('Second function running');
};
