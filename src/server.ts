import app from "./app"
import mongoose from "mongoose";

const port:number = 5000;
async function dbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("✌️✌️Database connetction successfulll");

    app.listen(port, () => {
      console.log(`server connected on PORT ${port}`);
    });
  } catch (error) {
    console.log(`😥😥Failed to connect database `, error);
  }
}
dbConnect();


