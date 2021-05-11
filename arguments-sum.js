function sum() {
  let args = Array.from(arguments);
  console.log(args);
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
console.log(sum(1, 2, 3));
