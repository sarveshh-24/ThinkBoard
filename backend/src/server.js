import express from "express"
import cors from "cors"
import dotenv from "dotenv";

//const express = require("express");
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors({
  origin: "https://reimagined-yodel-97vq6jgxxpjr2pqx-5173.app.github.dev"
}));

//middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body

app.use(cors());
app.use(rateLimiter); // rateLimiter is the name of the middleware


//our simple custom middle ware
// app.use((req, res, next) =>{
//     console.log(`Req method is ${req.method} and req url is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);


app.listen(PORT, () =>{
    console.log("Server started on PORT : 5001")
})
