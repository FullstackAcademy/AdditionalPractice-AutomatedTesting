const functions = require("../functions/ourFunctions");
const { expect } = require("chai");

describe("Your tests for our functions", function () {
  describe("Function sayHello Tests", function () {
    //Here you will write tests for the sayHello function
    xit("sayHello should return 'Name must be a string' if the argument passed is not a string", function () {
      const result = functions.sayHello(123);
      expect(result).to.equal("Name must be a string");
    });

    xit("sayHello should return a template literal with the format of `hello ${name}`", function () {
      const result = functions.sayHello("David");
      expect(result).to.equal("hello David");
    });
  });

  describe("Function addToAnyArray Tests", function () {
    //Here you will write tests for the addToArray function
    xit("function addToAnyArray should return an array", function () {
      const arr = [];
      const result = functions.addToAnyArray(arr, "hello world");
      expect(Array.isArray(result)).to.equal(true);
    });

    xit("calling the function once with an input should return an array with a length of 1", function () {
      const arr = [];
      const result = functions.addToAnyArray(arr, 1);
      expect(result.length).to.equal(1);
    });

    xit("calling the function once with an input should return an array with a one element, the element passed through as an arugment", function () {
      const arr = [];
      const result = functions.addToAnyArray(arr, "argument");
      expect(result[0]).to.equal("argument");
    });

    xit("calling the function with an input should return an array where the last element is the element that was passed as an argument", function () {
      //For example
      //addToAnyArray(arr, "one")
      //addToAnyArray(arr, "two")
      //addToAnyArray(arr, "three")
      //The last element in the array should be "three" (["one", "two", "three"])
      const arr = [];
      functions.addToAnyArray(arr, "one");
      functions.addToAnyArray(arr, "two");
      const result = functions.addToAnyArray(arr, "three");

      expect(result[result.length - 1]).to.equal("three");
    });
  });
});
