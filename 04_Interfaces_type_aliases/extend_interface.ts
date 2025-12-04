interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

interface Admin extends User {
  admin: boolean;
}

const abcd = (obj: User) => {
  console.log(obj.gender);
};

const abcdadmin = (obj: Admin) => {
  console.log(obj.email);
};

abcd({ name: "Rayied", email: "a@gmail.com", password: "1234" });
abcdadmin({
  name: "Rayied",
  email: "a@gmail.com",
  password: "1234",
  admin: true,
});

interface x {
  name: string;
}
interface x {
  email: string;
}
function ab(obj: x) {
  console.log(obj.name);
  console.log(obj.email);
  //   interface of same name are merged
}
