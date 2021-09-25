const express = require('express')
const ctrl = require('../controllers/users')

const router = express.Router()

router.get('/', ctrl.get)
router.get('/:id', ctrl.getOne)
router.get('/editar/:id', ctrl.getOne)

router.post('/add', ctrl.post)
router.post('/update/:id', ctrl.update)
router.post('/delete/:id', ctrl.delete)

module.exports = router