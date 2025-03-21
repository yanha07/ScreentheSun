const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin : ['']
}))

app.listen(()=>{
    console.log("app is listening on port 8000");
})
