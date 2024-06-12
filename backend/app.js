require("express-async-errors")
const express = require("express")
const app = express()
require("dotenv").config()
require("./src/db/dbConnection")
const port = process.env.PORT || 5001
const router = require("./src/routers")
const errorHandlerMiddleware = require("./src/middlewares/errorHandler")

//swagger connection
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node.js API Project for Rasgelify',
            version: '1.0.0'
        },
        servers:[
            {
                url: 'http://localhost:5000/'
            }
        ]
    },
    apis: ['/app.js']
}
const swaggerSpec = swaggerJSDoc(options)
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

//Middlewares
app.use(express.json())
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}))

app.use("/api", router)

app.get("/", (req,res) => {
    res.json({
        message: "Anasayfaya hoş geldiniz."
    })
})

//hata yakalama
app.use(errorHandlerMiddleware)

app.listen(port,()=> {
    console.log(`Server ${port} portunda çalışıyor..`)
})