import User from "./user.model";

export const createUserToDB = async () => {
  const user = new User({
    id: "12h34",
    role: "student",
    password: "password123",
    email: "example@example.com",
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    gender: "male",
  });
  console.log(user);
  return await user.save();
};
