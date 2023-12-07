const express = require('express')
const app = express()
require('dotenv').config()



app.get('/',(req,res) => res.send('My backend'))
const port = process.env.PORT
app.listen(port, () => console.log(`Server is running on port ${port}`))