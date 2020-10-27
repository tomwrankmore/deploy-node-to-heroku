const express = require('express') //included express framework
const router = express.Router() //Router from inside express
const navController = require('./controllers/navController')
const userController = require('./controllers/userController')

// Navigation Routes
router.get('/', navController.home)
router.get('/about', navController.about)
router.get('/portfolio', navController.portfolio)
router.get('/contact', navController.contact)
router.get('/terms', navController.terms)

// Post Routes
router.post('/users', userController.userForm)

module.exports = router