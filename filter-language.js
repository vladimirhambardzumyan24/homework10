function filterUsers(users) {
  const user = users.filter((item) => item.lang !== "ru");
  return user;
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
console.log(filterUsers(users));
