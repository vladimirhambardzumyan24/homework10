function map(array, action) {
  let newArr = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArr.push(action(element, index, array));
  }
  return newArr;
}

const action = (el) => {
  return (el *= 2);
};

let numbers = [-5, -4, 0, 1, 2, 3, 4, 5];
console.log(map(numbers, action));
