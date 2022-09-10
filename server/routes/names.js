const express = require('express')

const db = require('../db/names')

const router = express.Router()

router.get('/', (req, res) => {
  db.getNames()
    .then((results) => {
      res.json({ names: results.map((name) => name.name) })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const namesData = req.body
  console.log(req.body)
  console.log('namesdata', typeof namesData)
  db.addName(namesData)
    .then((ids) => {
      const newName = ids[0]
      res.json([...namesData, newName])
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

module.exports = router
