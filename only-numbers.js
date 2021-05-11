function OnlyNumbers(arr) {
  const numbers = arr.filter((item) => item === Number(item));
  return numbers;
}
const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
console.log(OnlyNumbers(arr));
