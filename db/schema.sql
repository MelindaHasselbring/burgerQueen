
DROP DATABASE IF EXISTS burgers_db;

### Schema
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	created_at TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

