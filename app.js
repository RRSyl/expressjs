const express = require('express')
const app = express()
const port = 3000
const router = require("./routes")

app.use(express.json())
app.use(express.urlcode ({extended: true}))
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})