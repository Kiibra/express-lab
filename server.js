// import modules

import express from 'express'
import { developers } from './data/developers.js'
// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)


// mount routes
app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/developers', function (req, res) {
  res.render('developers/index', {
    developers: developers
  })
})

app.get('/', function (req, res) {
  res.redirect('/home')
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})