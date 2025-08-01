require('dotenv').config()
import express from 'express'

const app = express()

const PORT = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
