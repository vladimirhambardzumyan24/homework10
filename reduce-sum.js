function ReduceSum(arr) {
  let Sum = arr.reduce((sum, current) => {
    if (current > 18) {
      return sum + current;
    } else {
      return sum;
    }
  }, 0);
  return Sum;
}
const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];
console.log(ReduceSum(arr));
