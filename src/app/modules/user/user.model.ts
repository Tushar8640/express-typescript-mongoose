import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  email: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"] },
  password: { type: String, required: true },
  role: {
    type: String,
  },
});

const User = model<IUser>("User", userSchema);

export default User;
