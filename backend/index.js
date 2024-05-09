const express = require("express");
const cors = require("cors");
const connectDb = require("./db/connect");
require("dotenv").config();
const bookRoute = require("./routes/book");
const routeNotFound = require("./middleware/routeNotFound");
const errorHandlerMiddleware = require("./middleware/errorHandlingMiddleware");

const app = express();

// middleware
app.use(
    cors({
        origin: ["https://book-store-mern-frontend-beta.vercel.app"],
        methods: ["GET", "POST", "PATCH", "DELETE"],
        allowedHeaders: ["content-type"],
        optionsSuccessStatus: 200,
        credentials: true,
    })
);

app.use(express.json());

// default route
// app.get("/", (req, res) => {
//   res.json("hello");
// });

// routes
app.use("/books", bookRoute);
app.use(routeNotFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const handler = async (req, res) => {
  try {
    // Connect to MongoDB
    await connectDb(process.env.MONGO_URI);

    // Handle your routes here (optional)
    if (req.method === "GET" && req.url === "/") {
      res.json("hello");
    } else {
      res.status(404).json({ error: "Route not found" });
    }
  } catch (error) {
    console.error("Error connecting to database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

 
    // app.listen(port, () => {
    //   console.log(`server running on port ${port}`);
    // });
 

