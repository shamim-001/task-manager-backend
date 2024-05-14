import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("DB is connected"))
    .catch((error) => console.log(error));
};

export default connectDB;
