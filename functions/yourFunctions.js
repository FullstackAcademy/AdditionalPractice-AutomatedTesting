function addNames(studentArray) {
  const result = [];
  studentArray.forEach((student) => {
    result.push(student.name);
  });
  return result;
}

function multiply(value1, value2) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return 0;
  }
  return value1 * value2;
}

module.exports = {
  addNames,
  multiply,
};
