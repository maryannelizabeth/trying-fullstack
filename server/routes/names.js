const express = require('express')

const db = require('../db/names')
const checkJwt = require('../check-jwt')

const router = express.Router()
// /api/v1/names/
router.get('/', checkJwt, (req, res) => {
  const id = req.auth?.sub

  db.getNames(id)
    .then((results) => {
      res.json({ results })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', checkJwt, (req, res) => {
  const id = req.auth?.sub
  const name = req.body.name

  db.addName({ name, id })

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
