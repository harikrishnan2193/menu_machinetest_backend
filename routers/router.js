const express = require('express')
const router = new express.Router()

const menuController = require('../controllers/menuController')

//route to add menus
router.post('/menu/addnew', menuController.addmenu)

//get all menu
router.get('/menu/getall', menuController.getAllMenus);

//get meu items
router.get('/menu/:id', menuController.getMenuDetails);

module.exports = router