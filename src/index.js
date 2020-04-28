const express = require('express')
require('./db/mongoose')
const userUrl = require('./routers/user')
const taskUrl = require('./routers/task')
const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(userUrl)
app.use(taskUrl)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

