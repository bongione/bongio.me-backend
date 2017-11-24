import express from 'express'
import path from 'path'
export const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './templates/views'))
app.set('title', 'Bongio\'s late night thinking')

app.use((req, res) => {
    res.render('index')
})
