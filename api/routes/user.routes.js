const router = require('express').Router()
const { getUsers, getOneUser, updateUser, deleteUser, getUserEvents, createUser } = require('../controllers/user.controller')

router.get('/showall', getUsers)
router.get('/show/:id', getOneUser)
router.post('/create', createUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)
router.get('/events', getUserEvents)

module.exports = router