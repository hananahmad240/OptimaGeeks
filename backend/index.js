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


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})