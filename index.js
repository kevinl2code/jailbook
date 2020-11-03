const express = require('express')
const app = express()
const port = 5000
const axios = require('axios')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/organizations', async (req, res) => {
//     const dataList = await axios.get('http://www.JailBase.com/api/1/sources/')
//     res.send(dataList.data)
// })

// app.post('/formsubmit', (req, res) => {
//     console.log(req.body)
//     res.send('worked')
// })
require('./routes/searchRoutes')(app)

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})