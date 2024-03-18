# E-Commerce Back End

<br/>
<p align="center">
    <a href="https://sequelize.org/">
        <img alt="Sequelize ORM - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more" src="https://img.shields.io/static/v1.svg?label=Sequelize ORM&message=Node.js&color=blueviolet" /></a>
    <a href="https://www.mysql.com/">
        <img alt="MySQL - An open-source relational database management system" src="https://img.shields.io/static/v1.svg?label=MySQL&message=database&color=yellowgreen" /></a>
    <a href="https://www.render.com/">
        <img alt="Render (for deployment) - A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud" src="https://img.shields.io/static/v1.svg?label=Render&message=deployment&color=orange" /></a>
    <a href="https://www.npmjs.com/package/express-session">
        <img alt="express-session - A session middleware for Express.js, used for handling user sessions" src="https://img.shields.io/static/v1.svg?label=express-session&message=middleware&color=green" /></a>
<!--     <a href="https://socket.io/">
        <img alt="Socket.IO (for real-time collaboration) - Enables real-time, bidirectional, and event-based communication between web clients and servers" src="https://img.shields.io/static/v1.svg?label=Socket.IO&message=real-time collaboration&color=yellow" /></a> -->
    <a href="https://nodejs.org/" >
        <img alt="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications" src="https://img.shields.io/static/v1.svg?label=Node.js&message=JavaScript runtime&color=lightyellow" /></a>
    <a href="https://expressjs.com/" >
        <img alt="Express.js - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications" src="https://img.shields.io/static/v1.svg?label=Express.js&message=web app framework&color=blue" /></a>
    <a href="https://www.npmjs.com/package/dotenv" >
        <img alt="dotenv NPM" src="https://img.shields.io/static/v1.svg?label=npm&message=dotenv&color=brightgreen" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
        <img alt="JavaScript - ES6" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=lightgrey" /></a>
    <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=black" /></a>
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=UNB&message=Bootcamp&color=red" /></a>
    <a href="https://opensource.org/license/mit/">
        <img alt="The MIT License" src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=lightgreen" /></a>
</p>
<br/>


## Description

This project is an E-commerce back end that utilizes the latest technologies, providing an efficient and scalable solution for internet retail companies. Built with an Express.js API and connected to a MySQL database using Sequelize, this application facilitates product, category, and tag management through a RESTful API. This allows businesses to maintain their inventory in a database, offering endpoints for creating, reading, updating, and deleting (CRUD operations) data for categories, products, and tags.

## Table of Contents

- [Demo Video](#demo-video)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Models](#database-models)
- [Associations](#associations)
- [Structure](#structure)
- [Starter Code](#starter-code)
- [State Flow Diagram](#state-flow-diagram)
- [Contributing](#contributing)
- [License](#license)

## Demo Video

[Open Demo video of Employee Tracker][employee-tracker]

## Features

- **View All Categories, Products, and Tags**: Users can retrieve a comprehensive list of all categories, products, and tags stored in the database, each accessible through dedicated API GET routes. This feature ensures that the backend supports scalable read operations for e-commerce inventories.

- **Add New Categories, Products, and Tags**: The backend allows for the insertion of new categories, products, and tags into the database via API POST routes. This functionality is crucial for expanding the e-commerce catalog and supporting a growing business.

- **Update Existing Categories, Products, and Tags**: With API PUT routes, users can modify the details of existing categories, products, and tags. This feature facilitates dynamic inventory management, allowing changes to product details, categorizations, and tagging as needed.

- **Delete Categories, Products, and Tags**: The API DELETE routes enable users to remove categories, products, and tags from the database. This capability is essential for keeping the database clean and up-to-date, ensuring that discontinued products or obsolete categories and tags are properly managed.

- **Structured Database Models with Associations**: Utilizes Sequelize to define structured database models for Categories, Products, Tags, and ProductTags, with appropriate associations among them. This structure supports complex queries and relationships, such as finding all products within a category or all tags associated with a product.

- **Environment Variable Configuration**: Incorporates the `dotenv` package to securely configure environment variables. This approach safeguards database credentials and other sensitive information, making the application more secure and easier to configure across different environments.

- **Sequelize Sync on Server Start**: Automatically syncs Sequelize models to the MySQL database upon server startup. This feature ensures that the database schema is up-to-date and ready for operations as soon as the server begins running.

## Installation

1. Ensure you have [Node.js][node-js] and [MySQL][my-sql] installed on your machine.
2. Clone the repository to your local machine:

```bash
git clone https://github.com/naturuplift/ECommerceBackEnd.git
```

3. Navigate to the project directory and install dependencies:

```bash
cd ECommerceBackEnd
npm install
```

4. Create a `.env` file in the root directory to store your MySQL username, password, and database name:

```bash
DB_NAME='ecommerce_db'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password'
DB_HOST='your_host'
```

5. Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands.
6. Seed the database:

```bash
npm run seed
```

7. Start the server:

```bash
npm start
```

## Usage

Once the server is running, you can use an API client like [Insomnia][insomnia] to test the API routes.

- **GET routes** for categories, products, and tags display data in a formatted JSON.

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/729ca888-d5f8-4e05-96d2-2bcd33039a1e)

- **POST, PUT, and DELETE routes** allow for creating, updating, and deleting data in the database.

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/048894e3-20ef-4c5c-9dfa-245639ecbb19)
![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/6eca5b93-2ba4-4149-9796-1f28340633eb)
![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/1f4ffb12-12fd-4dd0-bc44-2b3853eb88e4)

### Application Functionality

Below are sample screenshots showcasing the application routes functionality.

**GET** All Categories:

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/2b637709-ecd0-446b-92f3-a2aabb6a63fb)

**GET**  Category (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/15def146-f9d3-48c0-9165-625378d2886f)

**GET** All Products:

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/96c28961-f947-46a2-9824-1d6bc145f56d)

**GET** Product (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/6e55127d-e0ec-415c-b0d9-a491da536415)

**GET** All Tags:

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/056ef4de-637f-494e-9f2d-fc7b78dc7423)

**GET** Tag (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/9a70df32-ebdd-4710-9db8-d55e045be6e1)

**POST** CREATE Category:

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/d1ac500f-f5a1-48b0-b51b-cdc502f2ecc6)

**PUT** UPDATE Category (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/70586422-0cc7-460c-8057-168faafa860b)

**DELETE** DELETE Category (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/87d4d370-9c2e-4d79-b290-3aa3d8f0b9ff)

**POST** CREATE Product:

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/84b7c488-5ec7-4c35-96df-4fd62218041a)

**PUT** UPDATE Product (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/679fd302-84b5-4e97-9202-3846ad878718)

**DELETE** DELETE Product (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/5e2e35f8-891c-4ceb-a47f-fc6a256f804b)

**POST** CREATE Tag:

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/c98b0412-3bef-402e-967f-49481525515f)

**PUT** UPDATE Tag (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/3944210f-9400-4b15-b8cd-f94e15324c48)

**DELETE** DELETE Tag (by Id):

![image](https://github.com/naturuplift/ECommerceBackEnd/assets/23546356/9404dfbf-d2ff-43fd-96f4-8d55e8705b3c)

## Database Models

- **Category**
    - `id` (Integer, Primary Key, Auto Increment, Not Null)
    - `category_name` (String, Not Null)

- **Product**
    - `id` (Integer, Primary Key, Auto Increment, Not Null)
    - `product_name` (String, Not Null)
    - `price` (Decimal, Not Null, Validates Decimal)
    - `stock` (Integer, Not Null, Default Value 10, Validates Numeric)
    - `category_id` (Integer, References Category model's id)

- **Tag**
    - `id` (Integer, Primary Key, Auto Increment, Not Null)
    - `tag_name` (String)

- **ProductTag**
    - `id` (Integer, Primary Key, Auto Increment, Not Null)
    - `product_id` (Integer, References Product model's id)
    - `tag_id` (Integer, References Tag model's id)

## Associations

- Product belongs to Category
- Category has many Product models
- Product belongs to many Tag models through ProductTag
- Tag belongs to many Product models

## Structure

Your directory may have the following structure:

```javascript
ECommerceBackEnd/
├── config/
│   └── connection.js
├── db/
│   ├── schema.sql
├── models/
│   ├── Category.js
│   ├── Product.js
│   ├── Tag.js
│   ├── ProductTag.js
│   └── index.js
├── routes/
│   ├── api/
│   │   ├── category-routes.js
│   │   ├── product-routes.js
│   │   ├── tag-routes.js
│   │   └── index.js
│   └── index.js
├── seeds/
│   ├── category-seeds.js
│   ├── product-seeds.js
│   ├── productTag-seeds.js
│   ├── tag-seeds.js
│   └── seed.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md

```

## Starter Code

To start with this project we used the following [Starter Code][starter-code]

## State Flow Diagram

For a visual representation of the sequence of actions involved in the **employee tracker**, refer to the [State Flow Diagram][state-flow] provided in the project documentation.

Feel free to reach out, contribute, or provide feedback to make the Password Generator Project even more robust and user-friendly!

## Contributing

Your contributions are welcome! Please feel free to submit issues and pull requests with improvements or suggestions.

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[employee-tracker]: <https://drive.google.com/file/d/1i3c_WAIJ3xCJV2l0yvCXyzdZwKM7PPnv/view>
[node-js]: <https://nodejs.org/>
[my-sql]: <https://www.mysql.com/>
[insomnia]: <https://insomnia.rest/>
[starter-code]: <https://github.com/coding-boot-camp/fantastic-umbrella>
[state-flow]: <https://github.com/naturuplift/ECommerceBackEnd/blob/main/assets/eCommeerce%20Back%20End%20State%20Diagram%20v1.png>
[MIT]: <https://github.com/naturuplift/ECommerceBackEnd/blob/main/LICENSE>
