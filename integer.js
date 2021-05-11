function parseInteger(arr) {
  const subArr = arr.map(function (item) {
    if (Number(item) === Number(item)) {
      return Number(item);
    } else {
      return null;
    }
  });
  return subArr;
}

console.log(parseInteger(["1", "px", "2323"]));
