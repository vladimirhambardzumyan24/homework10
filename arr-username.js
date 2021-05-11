function getUserNames(users) {
  return users.map((el) => el.username);
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
console.log(getUserNames(users));
