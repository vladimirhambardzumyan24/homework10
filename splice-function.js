function splice(array, startIndex, endIndex, ...elements) {
  let lastItem;
  if (typeof endIndex === "undefined") {
    lastItem = array.length;
  } else {
    lastItem = startIndex + endIndex;
  }
  let newArr = [];
  let firstArr = [];
  let endArr = [];
  if (elements.length === 0) {
    for (let index = startIndex; index < lastItem; index++) {
      newArr.push(array[index]);
    }
    return newArr;
  } else {
    for (let index = 0; index < startIndex; index++) {
      firstArr.push(array[index]);
    }
    for (let index = startIndex + endIndex; index < array.length; index++) {
      endArr.push(array[index]);
    }
  }
  let Arr = firstArr.concat(elements, endArr);
  return Arr;
}

let numbers = [-5, -4, 0, 1, 2, 3, 4, 5];
console.log(splice(numbers, 3, 4, "dsfsd", "jfhsddf"));
