-- ITEMS TABLE
-- ===========

INSERT INTO items (Name, Description, Start_date, End_date)
VALUES ("Blender", "Good condition; model 120EX", to_date('20190125','YYYYMMDD'), to_date('20190225','YYYYMMDD')),

INSERT INTO items (Name, Description, Start_date, End_date)
VALUES ("Drill", "Power drill ", to_date('20190210','YYYYMMDD'), to_date('20190225','YYYYMMDD')),

INSERT INTO items (Name, Description, Start_date, End_date)
VALUES ("Sofa", "Good condition; comfy and clean", to_date('20190312','YYYYMMDD'), to_date('20190420','YYYYMMDD')),

INSERT INTO items (Name, Description, Start_date, End_date)
VALUES ("Leather coat", "Good condition; 1990's", to_date('20190403','YYYYMMDD'), to_date('20190512','YYYYMMDD')),

INSERT INTO items (Name, Description, Start_date, End_date)
VALUES ("Portable film projector", "Newest model, 4K projection", to_date('20190519','YYYYMMDD'), to_date('20190628','YYYYMMDD')),

-- USERS TABLE
-- ===========

INSERT INTO users (First_name, Last_name, City)
VALUES ("John", "Doe", "San Francisco");

INSERT INTO users (First_name, Last_name, City)
VALUES ("Mary", "Joseph", "Seattle");

INSERT INTO users (First_name, Last_name, City)
VALUES ("Clark", "Kent", "New York");

INSERT INTO users (First_name, Last_name, City)
VALUES ("Joanna", "D'Arc", "Salem");

INSERT INTO users (First_name, Last_name, City)
VALUES ("Abraham", "Lincoln", "Washington DC");

-- CATEGORIES TABLE
-- ================

INSERT INTO categories (Name)
VALUES ("Furniture");

INSERT INTO categories (Name)
VALUES ("Tools");

INSERT INTO categories (Name)
VALUES ("House utensils");

INSERT INTO categories (Name)
VALUES ("Clothing");

INSERT INTO categories (Name)
VALUES ("Electronics");

-- IMAGES TABLE
-- ============

INSERT INTO images (BLOB)
VALUES ();

INSERT INTO images (BLOB)
VALUES ();

INSERT INTO images (BLOB)
VALUES ();




INSERT INTO CATEGORIES (name) VALUES ('Bathroom');
INSERT INTO CATEGORIES (name) VALUES ('Bedroom');
INSERT INTO CATEGORIES (name) VALUES ('Books');
INSERT INTO CATEGORIES (name) VALUES ('Childrens');
INSERT INTO CATEGORIES (name) VALUES ('Cooking');
INSERT INTO CATEGORIES (name) VALUES ('Decoration');
INSERT INTO CATEGORIES (name) VALUES ('Dining');
INSERT INTO CATEGORIES (name) VALUES ('Eating');
INSERT INTO CATEGORIES (name) VALUES ('Food');
INSERT INTO CATEGORIES (name) VALUES ('Hallway');
INSERT INTO CATEGORIES (name) VALUES ('Home Electronics');
INSERT INTO CATEGORIES (name) VALUES ('Home Improvement');
INSERT INTO CATEGORIES (name) VALUES ('Kitchens');
INSERT INTO CATEGORIES (name) VALUES ('Laundry');
INSERT INTO CATEGORIES (name) VALUES ('Leisure and Safety');
INSERT INTO CATEGORIES (name) VALUES ('Lighting');
INSERT INTO CATEGORIES (name) VALUES ('Living Room');
INSERT INTO CATEGORIES (name) VALUES ('Office Furniture');
INSERT INTO CATEGORIES (name) VALUES ('Outdoor Furniture');
INSERT INTO CATEGORIES (name) VALUES ('Pets');
INSERT INTO CATEGORIES (name) VALUES ('Secondary Storage');
INSERT INTO CATEGORIES (name) VALUES ('Small Storage');
INSERT INTO CATEGORIES (name) VALUES ('Textiles and Rugs');

