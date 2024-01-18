const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to Database");
    // Start your application or perform additional operations
  })
  .catch((error) => {
    console.error("Error connecting to Database:", error);
  });
