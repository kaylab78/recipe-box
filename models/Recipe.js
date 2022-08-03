const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        recipe_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_category: {
            type: DataTypes.STRING,
        },
        recipe_body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        recipe_source: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
);

module.exports = Recipe;