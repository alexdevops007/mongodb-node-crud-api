const express = require("express");
const { v4: uuidv4 } = require("uuid");
const colors = require("colors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const noteRouter = require("./routes/noteRoute")

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/notes", noteRouter);

app.get("/", (req, res, next) => {
  res.status(200).json({
    statusCode: 200,
    status: "success",
    clientId: uuidv4(),
    message: "MongoDBNodeCrud Application is running successfully",
  });
});
app.listen(port, () =>
  console.log(`Server started running on port ${port}`.underline.bgWhite.bold)
);
