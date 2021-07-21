const express = require('express')
const app = express()
require('dotenv').config()
var cors = require('cors')
const port=process.env.PORT||8080;

app.use(cors())
//db connection
// require('./startup/db')();

//routes 
require("./startup/routes")(app);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});
if(process.env.NODE_ENV==="production")
{
    app.use(express.static("client/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
}
