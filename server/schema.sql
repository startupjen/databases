CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID INT NOT NULL AUTO_INCREMENT,
  date DATE,
  username VARCHAR(25),
  message VARCHAR(100),
  room VARCHAR(25),
  PRIMARY KEY ( messageID )
);

INSERT INTO messages (username, message, room)
  VALUES
  ('someuser', 'heyo this is message', 'lobby');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

