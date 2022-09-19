const express = require('express')

const db = require('../db/names')
const checkJwt = require('../check-jwt')

const router = express.Router()
// /api/v1/names/
router.get('/', checkJwt, (req, res) => {
  const id = req.auth?.sub
  // const auth0Id = req.user?.sub
  // console.log(auth0Id)
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
  const auth0Id = req.user?.sub
  const name = req.body.name

  db.addName({ name, auth0Id })

    .then((ids) => {
      const id = ids[0]
      res.json({ id: id, name: name, auth0Id: auth0Id })
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})

router.delete('/:id', checkJwt, (req, res) => {
  // const auth0Id = req.user?.sub
  console.log(req.params.id)
  db.delName(Number(req.params.id))
    .then(() => db.getNames())
    .then((names) => res.json({ names }))
    .catch((err) => {
      console.error(err)
      if (err.message === 'Unauthorized') {
        res
          .status(403)
          .send('Unauthorized: Only the user who added the fruit may update it')
      } else {
        res.status(500).send(err.message)
      }
    })
})

module.exports = router
