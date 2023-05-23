export interface IUser {
  id: string;
  role: "student";
  password: string;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
}
