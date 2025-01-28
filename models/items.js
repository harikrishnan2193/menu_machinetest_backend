const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Item = sequelize.define('Item', {
    item_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_name: {
        type: DataTypes.CHAR(255),
        allowNull: true
    },
    item_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    amount: {
        type: DataTypes.CHAR(10),
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'item',
    timestamps: false
});

module.exports = Item;
