require('dotenv')

const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config()

const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())
app.use(require("./routes/record"))

// driver connection
const dbo = require('./db/conn')

app.listen(port, () => {
    // connect to database when server starts
    dbo.connectToServer(function (err) {
        if (err) console.log(err)
    })

    // else
    console.log(`server running on port: ${port}`)
})

