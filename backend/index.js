require("dotenv").config();
const bookRoute = require("./routes/book");
const routeNotFound = require("./middleware/routeNotFound");
const errorHandlerMiddleware = require("./middleware/errorHandlingMiddleware");
const cors = require("cors");
const express = require("express");
const app = express();

// middleware
const connectDb = require("./db/connect");
app.use(express.json());
app.use(
  cors({
    origin: ["https://book-store-mern-frontend-beta.vercel.app"],
    methods: ["POST", "GET", "PATCH", "DELETE"],
    allowedHeaders: ["content-type"],
    credentials: true,
  })
);

// default route
app.get("/", (req, res) => {
  res.json("hello");
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
