import mongoose from "mongoose";

const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => console.log("DB is connected"))
    .catch((error) => console.log(error));
};

export default connectDB;
