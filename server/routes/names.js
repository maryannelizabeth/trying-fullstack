const express = require('express')

const db = require('../db/names')

const router = express.Router()

router.get('/', (req, res) => {
  db.getNames()
    .then((results) => {
      res.json({ results })
      console.log('results', results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const namesData = req.body
  const name = req.body.name
  //console.log(req.body)
  //console.log('names', typeof name)
  db.addName(namesData)
    .then((ids) => {
      const id = ids[0]
      res.json({ id: id, name: name })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
