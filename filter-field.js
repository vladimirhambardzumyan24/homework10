function filterByField(users, key) {
  const user = users.filter((item) => item[key]);
  return user;
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
console.log(filterByField(users, "isAstronaut"));
