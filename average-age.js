function getAverageAge(arr) {
  let Sum = arr.reduce((sum, current) => sum + current.age, 0);
  return Sum / arr.length;
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
console.log(getAverageAge(users));
