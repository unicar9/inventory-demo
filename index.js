const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const keys = require('./config/index')
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./models/user.model')
require('./services/passport')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, () => {console.log('MongoDB connected...')})

const app = express()
const assetRoutes = require('./routes/asset.routes')
const mallRoutes = require('./routes/mall.routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(logger('dev'))

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())


require('./routes/user.routes')(app)
app.use(assetRoutes)
app.use(mallRoutes)

app.get('/api', (req, res) => {
    res.send('Welcome to inventory management API, please go to /auth/google for user authentication')
})

// handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('Resource Not Found!')
})

// handler for 500
app.use((err, req, res, next) => {
    res.status(500).send('Connection Error!')
})

app.listen(keys.port, () => console.info(`Server has started on ${keys.port}...`))

module.exports = app