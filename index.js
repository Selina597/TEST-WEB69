import express from "express";
import mongoose from "mongoose";
import CombineRouter from "./routers/index.js";
const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Selina597:e4bJw61geCHvbXed@testweb69.3negyyr.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then(() => {
    console.log("DB Connection Successful");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.get("/", (_, res) => {
  console.log("API Connection Successful");
  res.send({
    message: "Connection Successful",
  });
});
app.use('/api/v1', CombineRouter)
app.listen(8888, () => console.log("Server Port 8888"));