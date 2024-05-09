const express = require("express");
const connectDb = require("./db/connect");
const cors = require('cors')
require("dotenv").config();
const bookRoute = require("./routes/book");
const routeNotFound = require("./middleware/routeNotFound");
const errorHandlerMiddleware = require("./middleware/errorHandlingMiddleware");

const app = express();

// middleware
app.use(cors())

app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send("hello");
});

// routes
app.use("/books", bookRoute);
app.use(routeNotFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log("could not connect to database");
  }
};

// connect to mongoDB && start port
start();
