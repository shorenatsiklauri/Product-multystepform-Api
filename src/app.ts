import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/mongo.js";
import multystepformRouter from "./routes/multystepform-routes.js"
import swaggerMiddleware from "./middlewears/swagger-middleware.js"
dotenv.config();
connect();

const app =express();
app.use(bodyParser.json());
app.use(cors());


app.use("/api", multystepformRouter);
app.use("/" , ...swaggerMiddleware);

app.listen(process.env.PORT || 3000);

