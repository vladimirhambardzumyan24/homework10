function some(array, action) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (action(element, index, array)) {
      return true;
    }
  }
  return false;
}

const action = (el) => {
  return el < -42;
};

let numbers = [-5, -4, 0, 1, 2, 3, 4, 5];
console.log(some(numbers, action));
