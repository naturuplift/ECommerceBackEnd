// import model and datatypes from sequelize package
const { Model, DataTypes } = require('sequelize');
// import sequelize connection
const sequelize = require('../config/connection.js');

// Define Category class
class Category extends Model {}

// Initialize Category model with its schema definition
Category.init(
  {
    // Define schema columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { // Associate this model with the sequelize instance
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// Category exported making it available for use in app
module.exports = Category;