const express = require('express')
const router = new express.Router()

const menuController = require('../controllers/menuController')

//route to add menus
router.post('/menu/addnew', menuController.addmenu)

//get all menu
router.get('/menu/getall', menuController.getAllMenus);

//get menu items
router.get('/menu/:id', menuController.getMenuDetails);

//add items 
router.post('/menu/additems', menuController.addItems)

module.exports = router