const express = require("express");
const connectDb = require("./db/connect");
const cors = require('cors')
require("dotenv").config();
const bookRoute = require("./routes/book");
const routeNotFound = require("./middleware/routeNotFound");
const errorHandlerMiddleware = require("./middleware/errorHandlingMiddleware");

const app = express();

// middleware
const corsOptions = {
  origin: [
    "https://book-store-mern-frontend-pearl.vercel.app",
    "http://localhost:5173",
    "http://app.lazaai.xyz"
    ],
    methods:["GET", "POST", "PATCH", "DELETE"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send(" i miss you and love you SO MUCH... i am so proud of you, my love");
  res.send("Welcome to the Book Store API");
});

app.get("/health", (req, res) => {
  res.send("API is running");
}
);
// routes
app.use("/books", bookRoute);
app.use(routeNotFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb("mongodb+srv://zarus:greatMind@cakematernity.bhcohwq.mongodb.net/?retryWrites=true&w=majority&appName=cakeMaternity")
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } catch (error) {
    console.log("could not connect to database");
  }
};

// connect to mongoDB && start port
start();
