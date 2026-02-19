import express from "express";
import mongoose, { mongo } from "mongoose";
import hobbyRoutes from "./routes/hobbyRoutes.js"

dotenv.config();
const app = express();
app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB succesfuly");
})
.catch((error) => {
    console.error(`couldn't connect to MongoDB: ${error}`);
});

app.use("/api/hobbies", hobbyRoutes);

const PORT = 3000;
app.listen((PORT) => {
    console.log(`server is running on ${PORT} port.`);
});

