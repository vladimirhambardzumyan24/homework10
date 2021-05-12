function findIndex(array, action) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (action(element, index, array)) {
      return index;
    }
  }
  return -1;
}

const action = (el) => {
  return el === 2;
};

let numbers = [-5, -4, 0, 1, 2, 3, 4, 5];
console.log(findIndex(numbers, action));
