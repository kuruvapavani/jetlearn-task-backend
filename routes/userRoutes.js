const express = require('express')
const { getUsers, createUser } = require('../controllers/userController')

const router = express.Router()

// routes

// get all users

router.get('/getusers',getUsers);
router.post('/create-user',createUser);

module.exports = router;