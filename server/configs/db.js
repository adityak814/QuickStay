// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () =>
//       console.log("Database Connected")
//     );

//     await mongoose.connect(`${process.env.MONGODB_URI}/QuickStay`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

// Utility to wait between retries
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectDB = async () => {
  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/QuickStay`);

      console.log("MongoDB connected successfully");
      return; // Exit the loop on success
    } catch (error) {
      attempt++;
      console.error(
        `MongoDB connection failed (attempt ${attempt}):`,
        error.message
      );

      if (attempt < maxRetries) {
        console.log(`Retrying connection in 2 seconds...`);
        await delay(2000); // wait before next attempt
      } else {
        console.error("All MongoDB connection attempts failed.");
        throw error; // throw after final failure
      }
    }
  }
};

export default connectDB;
