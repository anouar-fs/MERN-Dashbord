import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/clientRoutes.js";
import generalRoutes from "./routes/genralRoutes.js";
import managementRoutes from "./routes/managementRoutes.js";
import salesRoutes from "./routes/salesRoutes.js";

import Transaction from "./models/Transaction.js"
import OverallStat from "./models/Overall.js"
import {dataOverallStat} from "./data/index.js"

dotenv.config({ path: './vars.env' });
const app = express();


// parses incoming requests with JSON payloads. It allows your server to understand and work with JSON data.
app.use(express.json());
// adds security-related HTTP headers to your responses,
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
//Logs
app.use(morgan("common"));
//Body-parser is a middleware that parses the request body and makes it available under req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//enable Cross-Origin Resource Sharing, allowing the server to respond to requests from different origins (domains).
app.use(cors());


app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const PORT = process.env.PORT || 9000;



mongoose.connect(process.env.CONNECT_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server is running on port: ' + PORT);
        });
    })
    .catch((error) => {
        console.log(error + ' did not connect');
    });
