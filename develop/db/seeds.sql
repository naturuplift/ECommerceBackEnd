-- Use the database
USE ecommerce_db;

-- Inserting sample data into 'category' table
INSERT INTO category (id, category_name) VALUES
(1, 'Electronics'),
(2, 'Clothing'),
(3, 'Furniture'),
(4, 'Books'),
(5, 'Toys');

-- Inserting sample data into 'product' table
INSERT INTO product (id, product_name, price, stock, category_id) VALUES
(1, 'Laptop', 999.99, 14, 1),
(2, 'Graphic T-Shirt', 29.99, 35, 2),
(3, 'Coffee Table', 199.99, 10, 3),
(4, 'Fantasy Book', 39.99, 17, 4),
(5, 'Board Game', 49.99, 5, 5);

-- Inserting sample data into 'tag' table
INSERT INTO tag (id, tag_name) VALUES
(1, 'Popular'),
(2, 'Sale'),
(3, 'Eco-Friendly'),
(4, 'Classic'),
(5, 'Limited Edition');

-- Inserting sample data into 'productTag' table to associate products with tags
INSERT INTO productTag (id, product_id, tag_id) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 3),
(4, 3, 4),
(5, 4, 1),
(6, 4, 5),
(7, 5, 2),
(8, 5, 3);