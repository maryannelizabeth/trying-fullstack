const express = require('express')
const path = require('path')

const namesRoutes = require('./routes/names')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/names', namesRoutes)

module.exports = server
