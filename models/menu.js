const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Menu = sequelize.define('Menu', {
    menu_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    menu_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    menu_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    time_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'menu',
    timestamps: false
});

module.exports = Menu;
