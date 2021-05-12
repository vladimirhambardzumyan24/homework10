function slice(array, startIndex, endIndex = array.length) {
  let newArr = [];
  for (let index = startIndex; index < endIndex; index++) {
    newArr.push(array[index]);
  }
  return newArr;
}

let numbers = [-5, -4, 0, 1, 2, 3, 4, 5];
console.log(slice(numbers, 2));
