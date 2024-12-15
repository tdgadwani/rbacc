import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import app from "./app.js";
import connectDB from "./db/connection.js";

const PORT =  process.env.PORT || 3001;

(async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("Error While Connect the DataBase ", error.message);
      throw error;
    });
    app.listen(PORT, () => {
      console.log(`Server listening on Port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
})();
