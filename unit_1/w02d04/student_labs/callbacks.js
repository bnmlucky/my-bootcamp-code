// const someFunction = parameter => {
//   return parameter();
// };

// //someFunction("whatever");

// const sayHi = () => {
//   console.log("Hi!");
// };

// sayHi();

// someFunction(sayHi);

// const logs = func => {
//   return func();
// };

// const hi = () => {
//   console.log("hi");
// };

// hi();
// logs(hi);

// const foo = (param, param2) => {
//   param(param2);
// };

// const bar = param => {
//   console.log(param);
// };

// foo(bar, "hi");

// const foo = (func, str) => {
//   func(str, "hello");
// };

// const bar = (func, str) => {
//   console.log(str);
// };
// foo(bar, "hi");

const foo = (param, param2) => {
  param(param2, "hello");
};

const bar = (param, param2) => {
  console.log(param2);
};

foo(bar, "hi");

//param = func
//param2 = str
// it seems to me that param2 is 'hello', and bar prints it out
// I still do not understand why 'hi' does not appear at all

const baz = param => {
  console.log(param.toUpperCase());
};

foo(baz, "hello");

//
const electricMixer = attachment => {
  console.log("This mixer is now: " + attachment());
};

electricMixer(() => {
  return "spiralizing";
});

const spiralizer = () => {
  return "spiralizing";
};

electricMixer(spiralizer);

const slicerDicer = () => {
  return "slicin' and dicin'";
};

electricMixer(spiralizer);
electricMixer(slicerDicer);

const whippin = () => {
  return "whipping the cream, yum!";
};
electricMixer(whippin);

setTimeout(() => {
  console.log("hi");
}, 2000);

setInterval(() => {
  for (let num = 0; num < 10000; num++) {
    console.log(num);
  }
}, 10000);
