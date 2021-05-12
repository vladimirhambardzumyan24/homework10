function iterateAndAct(array, action) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    action(element, index, array);
  }
}

let res = 1;

const action = (el) => {
  if (el !== 0) {
    console.log(res);
    res *= el;
  }
};

let numbers = [-5, -4, 0, 1, 2, 3, 4, 5];
iterateAndAct(numbers, action);
