const express = require('express')
const app = express()
const port = 5000
const axios = require('axios')


app.get('/organizations', async (req, res) => {
    const dataList = await axios.get('http://www.JailBase.com/api/1/sources/')
    console.log(dataList.data)
    res.send(dataList.data)
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})