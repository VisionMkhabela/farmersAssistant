const express = require('express');
const hbs = require('hbs');
const app = new express();

const stepFiveRouter = require('./routes/stepFive')
const stepTwoRouter = require('./routes/stepTwo')
const applicationRouter = require('./routes/application')
const governmentRouter = require('./routes/government')
const homeRouter = require('./routes/home')
const stepThreeRouter = require('./routes/stepThree')
const stepStepFourRouter = require('./routes/stepFour')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const connectFlash = require("connect-flash")
var helpers = require('handlebars-helpers')();

const path = require('path')
const fileUpload = require("express-fileupload")

app.use(express.static('public'))
hbs.registerPartials('./views/partials')

hbs.registerHelper(helpers)
hbs.registerHelper('dateFormat', require('handlebars-dateformat'))
hbs.registerHelper('json', function (content) {
   return JSON.stringify(content)
})
app.use(connectFlash())
app.use(fileUpload())

const port = process.env.PORT || 3000
app.use(express.json({limit: '3mb', extended: true}))
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({limit: '3mb', extended: true}));
app.set('view engine', 'hbs')

app.use(governmentRouter)
app.use(loginRouter)
app.use(applicationRouter)
app.use(registerRouter)
app.use(homeRouter)
app.use(stepTwoRouter)
app.use(stepThreeRouter)
app.use(stepStepFourRouter)
app.use(stepFiveRouter)

app.get('/', async (req, res) => {
   return  res.render('index')
})

app.get('/applications', async (req, res) => {
   return  res.render('applications')
})
app.get('/messages', async (req, res) => {
   return  res.render('messages')
})
app.get('/documents', async (req, res) => {
   return  res.render('documents')
})

app.listen(port, () => {
   console.log('server is up on port', + port)
})