import express from "express";
import routes from "./routes";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
