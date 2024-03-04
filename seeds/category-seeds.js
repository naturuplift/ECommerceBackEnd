// Import the Category model from the sequelize models
const { Category } = require('../models');

// Array containing seed data for Category
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Function to seed Category data into the database
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the seed function for use in the seeding script
module.exports = seedCategories;