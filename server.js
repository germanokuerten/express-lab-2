const express = require("express")
const app = express()

const PORT = 3000

/////////////////////
// Greetings
/////////////////////

app.get("/greeting", (req, res) => {
    res.send("Hello, stranger")
})

app.get("/greeting/:name", (req, res) => {
    res.send(`Hello, ${(req.params.name)}`)
})

app.listen(PORT, () => {
})