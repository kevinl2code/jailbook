const axios = require('axios')
const jailBase = require('../apis/jailbase')

module.exports = (app) => {
    app.get('/organizations', async (req, res) => {
        const dataList = await jailBase.get('/sources/')
        res.send(dataList.data)
    })

    app.post('/formsubmit', async (req, res) => {
        console.log(typeof req.body)
        try {
            const searchResults = await jailBase.get('/search/' , {
                params: {
                    source_id: req.body.sourceID,
                    last_name: req.body.lastName,
                    first_name: req.body.firstName
                }}
            )
            console.log(searchResults.data)
            res.send(searchResults.data)
        } catch (error) {
            console.log(error)
        }
        console.log(searchResults)
    })
}