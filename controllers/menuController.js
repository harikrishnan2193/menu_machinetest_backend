const Menu = require('../models/menu')
const Item = require('../models/items')

exports.addmenu = async(req, res) => {
    try {
        const { menuName, menuDiscription } = req.body;
        if (!menuName || !menuDiscription) {
            return res.status(400).json({ error: 'Menu name and description are required' });
        }

        const newMenu = await Menu.create({
            menu_name: menuName,
            menu_description: menuDiscription
        });

        res.status(201).json({ message: 'Menu added successfully', menu: newMenu });
    } catch (error) {
        console.error('Error adding menu:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getAllMenus = async (req, res) => {
    try {
        const menus = await Menu.findAll();

        res.status(200).json(menus);
    } catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.getMenuDetails = async (req, res) => {
    try {
        const { id } = req.params; 
        console.log('id is:',id);
        

        const menu = await Menu.findByPk(id); 
        if (!menu) {
            return res.status(404).json({ error: 'Menu not found' });
        }

        const items = await Item.findAll({ where: { menu_id: id } }); 
        console.log('Items :',items);
        

        if (!items || items.length === 0) {
            return res.status(404).json({ error: 'No items found for this menu' });
        }

        res.status(200).json({ menu, items });
    } catch (error) {
        console.error('Error fetching menu details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

exports.addItems = async(req,res)=>{
    try {
        const { itemName, description, amount, menu_id } = req.body;
        console.log(itemName, description, amount, menu_id);
        

        if (!itemName || !description || !amount || !menu_id) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newItem = await Item.create({
            menu_id:menu_id,
            item_name:itemName,
            item_description:description,
            amount:amount
        });

        return res.status(201).json({ message: 'Item added successfully', item: newItem });

    } catch (error) {
        console.error('Error adding item:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}