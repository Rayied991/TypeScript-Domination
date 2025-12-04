//Union &  Intersection Types

// let a: string | null;//Union

type User = {
  name: string;
  email: string;
};
type Admin = User & {
  getDetails(user: string): void;
};

// error
// type abcd = number;
// type abcd = string;

