const functions = require("../functions/yourFunctions");
const { expect } = require("chai");

describe("addNames", function () {
  it("function addNames should return an array", function () {
    const data = [
      { name: "Tom", task: "Clean the chalkboard" },
      { name: "Diane", task: "Feed class pet" },
      { name: "Angela", task: "Re-stock printer paper" },
    ];
    let result = Array.isArray(functions.addNames(data));
    expect(result).to.equal(true);
  });

  it("function addToArray should return an array with a length equal to number of students in input array", function () {
    const data = [
      { name: "Tom", task: "Clean the chalkboard" },
      { name: "Diane", task: "Feed class pet" },
      { name: "Angela", task: "Re-stock printer paper" },
    ];
    let result = functions.addNames(data);
    expect(result).to.have.lengthOf(3);
  });
});

describe("multiply", function () {
  it("function multiply should correctly multiply two input values", function () {
    let result = functions.multiply(2, 2);
    expect(result).to.equal(4);
  });

  it("function multiply should return 0 if one or either of the inputs is NaN", function () {
    let result = functions.multiply("a", 2);
    expect(result).to.equal(0);
  });
});
