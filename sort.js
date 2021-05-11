function Sort(sortBy, array) {
  if (sortBy === "Asc") {
    array.sort(function (a, b) {
      return a - b;
    });
  } else if (sortBy === "Desc") {
    array.sort(function (a, b) {
      return b - a;
    });
  }
  return array;
}
let array = [4, 1, 2, 3];
let sortBy = "Desc";
console.log(Sort(sortBy, array));
