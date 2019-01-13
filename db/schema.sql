DROP DATABASE IF EXISTS stuffer_db;

CREATE DATABASE stuffer_db;

USE stuffer_db;

DROP TABLE IF EXISTS IMAGES;
CREATE TABLE IMAGES (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) not null,
  path VARCHAR(1000),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) not null,
  last_name  VARCHAR(100) not null,
  email      VARCHAR(100) not null,
  zip_code   VARCHAR(5),
  address    VARCHAR(255),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS CATEGORIES;
CREATE TABLE CATEGORIES (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) not null,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS ITEMS;
CREATE TABLE ITEMS (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(150) not null,
  category_id INT not null,
  owner_id INT not null,
  borrower_id INT,
  image_id INT,
  available_date DATE,
  available_period INT,
  borrowed_date DATE,
  borrowed_period DATE,
  penalty DECIMAL(9,2),
  serial_number VARCHAR(100),
  cost DECIMAL(9,2),
  PRIMARY KEY (id)
);

ALTER TABLE ITEMS
ADD FOREIGN KEY items_fk1(category_id)
REFERENCES categories(id);
ALTER TABLE ITEMS
ADD FOREIGN KEY items_fk2(owner_id)
  REFERENCES users(id);
ALTER TABLE ITEMS
ADD FOREIGN KEY items_fk3(borrower_id)
  REFERENCES users(id);
ALTER TABLE ITEMS
ADD FOREIGN KEY items_fk4(image_id)
  REFERENCES images(id);