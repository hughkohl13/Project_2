INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, POSTAL, ADDRESS)
VALUES ('Jack','Black','jb@blabla.com', '94501','Columbus');

INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, POSTAL, ADDRESS)
VALUES ("John", "Doe", "jd@me.com", "12345", "San Francisco");

INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, POSTAL, ADDRESS)
VALUES ("Mary", "Joseph", "mj@me.com", "23456", "Seattle");

INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, POSTAL, ADDRESS)
VALUES ("Clark", "Kent", "ck@me.com", "22134", "New York");

INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, POSTAL, ADDRESS)
VALUES ("Joanna", "D'Arc", "Jda@me.com", "34561", "Salem");

INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, POSTAL, ADDRESS)
VALUES ("Abraham", "Lincoln", "al@me.com", "11122", "Washington DC");

INSERT INTO USERS (FIRST_NAME, LAST_NAME, EMAIL, POSTAL, ADDRESS)
VALUES ('Mina','Brasilia','mb@me.com','94102','San Francisco');

INSERT INTO CATEGORIES (NAME) VALUES ("Furniture");
INSERT INTO CATEGORIES (NAME) VALUES ("Tools");
INSERT INTO CATEGORIES (NAME) VALUES ("House utensils");
INSERT INTO CATEGORIES (NAME) VALUES ("Clothing");
INSERT INTO CATEGORIES (NAME) VALUES ("Electronics");

INSERT INTO ITEMS(ITEM_NAME,CATEGORY_ID,OWNER_ID, DESCRIPTION, BORROWER_ID,IMAGE_ID)
VALUES ('Bed',1,1,NULL,NULL,NULL);