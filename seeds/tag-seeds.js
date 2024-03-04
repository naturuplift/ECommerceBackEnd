// Import the Tag model from the sequelize models
const { Tag } = require('../models');

// Array containing seed data for Tag
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Function to seed Tag data into the database
const seedTags = () => Tag.bulkCreate(tagData);

// Export the seed function for use in the seeding script
module.exports = seedTags;