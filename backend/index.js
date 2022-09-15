const express = require('express');
const bp = require('body-parser');
const cors = require('cors')
require("dotenv").config();
const allRoutes = require("./routes/index");


const app = express();



app.use(bp.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", allRoutes);

app.get("*",(req,res)=>{
    res.send("NOT FOUND").status(404)
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("../frontend/build"))
}


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})