import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

// using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// insert a test data into mongodb

/*
1.interface
2.Schema
3.Model
4.Databse Query
*/

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hello world");
  next();
});

// applicatin router
import userRoute from "./app/modules/user/user.route";
import bookRoute from "./app/modules/book/book.route";

app.use("/api/v1/user", userRoute);
app.use("/api/v1/book", bookRoute);
export default app;
