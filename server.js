const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
//db connection
require('./startup/db')();

//routes 
require("./startup/routes")(app);

const port=process.env.port||7000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});
