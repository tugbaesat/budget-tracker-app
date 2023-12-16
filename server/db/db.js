const mongoose = require("mongoose");

const db = async () => {
  try {
    mongoose.set("strictQuery", false);

    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connection events
    connection.connection.on("connected", () => {
      console.log("MongoDB Connected");
    });

    connection.connection.on("error", (err) => {
      console.error("MongoDB Connection Error:", err);
    });

    connection.connection.on("disconnected", () => {
      console.log("MongoDB Disconnected");
    });
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

module.exports = { db };
