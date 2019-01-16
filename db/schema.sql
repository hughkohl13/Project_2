<<<<<<< HEAD
DROP DATABASE IF EXISTS StufferDB;

CREATE DATABASE StufferDB;

USE StufferDB;

CREATE TABLE items (
    Id  INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Description VARCHAR(300) NOT NULL,
    Owner_id INT NOT NULL AUTO_INCREMENT,
    Borrower_id IN NOT NULL AUTO_INCREMENT,
    Start_date DATE,
    End_date DATE,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    First_name VARCHAR(30) NOT NULL,
    Last_name VARCHAR(30) NOT NULL,
    City VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(40) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE images (
    id INT NOT NULL AUTO_INCREMENT.
    Photo BLOB(2G),
    PRIMARY KEY (id)
);
=======
DROP DATABASE IF EXISTS stuffer_db;

CREATE DATABASE stuffer_db;

USE stuffer_db;

DROP TABLE IF EXISTS IMAGES;
CREATE TABLE IMAGES (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(150) not null,
  path VARCHAR(1000),
  originalname VARCHAR(150),
  mimetype VARCHAR(150),
  destination VARCHAR(255),
  size INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS CATEGORIES;
CREATE TABLE CATEGORIES (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) not null,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
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
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
>>>>>>> 2416b176b562572ed8ea896c098289b6c00eba26
