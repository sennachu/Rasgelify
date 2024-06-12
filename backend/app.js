require("express-async-errors");
const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./src/db/dbConnection');
app.use(cors());

const port = process.env.PORT || 5001;
const router = require("./src/routers");
const errorHandlerMiddleware = require("./src/middlewares/errorHandler");

connectDB();

const expressSwagger = require('express-swagger-generator')(app);
const options = {
    swaggerDefinition: {
        info: {
            description: 'Rasgelify',
            title: 'Rasgelify',
            version: '1.0.0',
        },
        host: 'localhost:5000',
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https']
    },
    basedir: __dirname, 
    files: ['./src/routers/*.js'] 
};
expressSwagger(options);

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use("/api", router);

app.get("/", (req, res) => {
    res.json({
        message: "Anasayfaya hoş geldiniz."
    });
});

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not Found'
    });
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor..`);
});
