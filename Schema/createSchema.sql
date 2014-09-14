
CREATE DATABASE campus;

CREATE USER 'Nandini'@'localhost' IDENTIFIED BY 'MySQL7*';
CREATE USER 'vibha'@'localhost' IDENTIFIED BY 'tiger';
CREATE USER 'host'@'localhost' IDENTIFIED BY 'host123';

USE campus;

Drop table IF EXISTS menu_master ;
CREATE TABLE menu_master(
	menu_id INT(3) NOT NULL AUTO_INCREMENT,
	item_name varchar(40) NOT NULL,
	item_calorie int(5) NOT NULL,
	item_price float(20) NOT NULL,
	item_type varchar(20) NOT NULL,
	item_cafe VARCHAR(20) NOT NULL,
	image_name VARCHAR(20),
	PRIMARY KEY(menu_id)
);

Drop table IF EXISTS Campus_Master_Table ;
CREATE TABLE Campus_Master_Table(
	CampusCard_ID INT(3) NOT NULL AUTO_INCREMENT,
	FirstName VARCHAR(20) NOT NULL,
	LastName VARCHAR(20),
	Email VARCHAR(20) NOT NULL,
	Password VARCHAR(10) NOT NULL,
	FoodPreference VARCHAR(15),
	MonthlyBudget INT(5),
	DailyCalorie INT(10),
	Amount INT(10),
	Primary Key (CampusCard_ID)							
);

DROP table IF EXISTS Order_Summary;
create table Order_Summary
(
	Order_ID INT(10) NOT NULL AUTO_INCREMENT, 
	CampusCard_ID INT(10),  
	Total_Amount FLOAT(10,2),
	Total_Calories INT(10),
	Cafe_ID INT(10),
	Date_Time datetime NOT NULL,
	Primary key(Order_ID)
);

DROP table IF EXISTS  Order_items;
CREATE table Order_items
(        
	ID INT(10) NOT NULL AUTO_INCREMENT,
	Order_ID INT(10),
	menu_id INT(3),
	Quantity INT(3) NOT NULL,
	Primary key(ID)
);

DROP table IF EXISTS Review_Master;
CREATE TABLE Review_Master
(
	CampusCard_ID INT(10) NOT NULL,
	item_cafe VARCHAR(20) NOT NULL,
	Rating INT(10),
	Comments VARCHAR(200)
);




/**
* Dummy data . 
*
*/

INSERT INTO Campus_Master_Table (CampusCard_ID,FirstName,LastName,Email,Password,Amount) values('1000','Admin','Admin','admin@ewuni.com','admin','500'),('1001','james','Bond','jbond@ewuni.com','jbond','500'),('1002','Mary','Jones','mjones@ewuni.com','mjones','500'),('1003','Urja','Patel','upatel@ewuni.com','upatel','500'),('1004','Nandini','Margad','nmargad@ewuni.com','nmargad','500'),('1005','Vibha','Prahlada','vprahlada@ewuni.com','vprahlada','500'),('1006','John','Smith','jsmith@ewuni.com','jsmith','500'),('1007','Ganesh','Bhai','gbhai@ewuni.com','gbhai','500'),('1008','Swapna','Surabhi','ssurabhi@ewuni.com','ssurabhi','500'),('1009','Mohammed','Iqbal','miqbal@ewuni.com','miqbal','500');

UPDATE Campus_Master_Table 
SET FoodPreference='vegan',MonthlyBudget='500',DailyCalorie='600' WHERE CampusCard_ID='1000';
UPDATE Campus_Master_Table 
SET FoodPreference='regular',MonthlyBudget='500',DailyCalorie='600' WHERE CampusCard_ID='1001';
UPDATE Campus_Master_Table 
SET FoodPreference='glutenfree',MonthlyBudget='600',DailyCalorie='600' WHERE CampusCard_ID='1002';
UPDATE Campus_Master_Table 
SET FoodPreference='regular',MonthlyBudget='500',DailyCalorie='600' WHERE CampusCard_ID='1003';
UPDATE Campus_Master_Table 
SET FoodPreference='glutenfree',MonthlyBudget='600',DailyCalorie='600' WHERE CampusCard_ID='1004';


INSERT INTO `Order_Summary` ( `CampusCard_ID`, `Total_Amount`, `Total_Calories`, `Date_Time`, `Cafe_ID`)
VALUES
	( 1001, 30.00, 300, '2012-10-24 08:37:18', 1),
	( 1001, 10.00, 400, '2012-10-24 08:37:18', 1),
	( 1001, 7.00, 100, '2012-11-01 08:37:18', 1),
	( 1001, 15.00, 900, '2012-11-02 08:37:18', 1),
	( 1001, 24.00, 700, '2012-11-07 08:37:18', 1),
	( 1001, 33.00, 300, '2012-11-09 08:37:18', 2),
	( 1001, 54.00, 150, '2012-11-15 08:37:18', 2),
	( 1001, 36.50, 340, '2012-11-17 08:37:18', 2),
	( 1001, 20.50, 480, '2012-11-21 08:37:18', 1),
	( 1001, 27.00, 740, '2012-11-24 08:37:18', 2);

INSERT INTO `Review_Master` (`CampusCard_ID`, `item_cafe`, `Rating`, `Comments`)
VALUES
	(1001, 'Natural Nourishment', 4, 'Very Natural'),
	(1003, 'The Healthy Hut', 4, 'Nice Hut'),
	(1002, 'Natural Nourishment', 2, 'Fresh Food but less tasty.'),
	(1005, 'The Healthy Hut', 5, 'Best hut in town.');








