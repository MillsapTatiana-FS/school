const express = require("express");
require("dotenv").config();
const app = express();


app.get("/", (req,res,next)=>{
    res.json({
        message: "Using GET",
        metadata: {
            host: process.env.host,
            port: process.env.port,
            method: req.method,
        }
    });
});



app.post("/",(req,res,next) => {
    res.json({
        message: "Using POST"
    });
});

app.patch("/",(req, res, next) => {
    res.json({
        message: "Using Patch"
    })
});

app.delete("/", (req, res, next) => {
    res.json({
        message: "Using Delete"
    })
});
// post, patch, delete

// middleware modules for error handling
app.use((req, res, next) => {
    const error = new Error("Not Found!!!")
    error.status = 404;
    next(error);
});
// middleware to send error nicely
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message, 
            status: error.status,
            method: req.method
        }
    });
});

app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))