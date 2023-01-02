//You have been provided with two functions. In /test/yourTests you will find the description of the tests you need to write

const sayHello = (name) => {
  if (typeof name !== "string") {
    return "Name must be a string";
  }
  return `hello ${name}`;
};

const addToAnyArray = (inputArray, input) => {
  if (input) {
    inputArray.push(input);
  }
  return inputArray;
};

module.exports = {
  sayHello,
  addToAnyArray,
};
