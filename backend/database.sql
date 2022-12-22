DROP DATABASE IF EXISTS entretien_tech;
CREATE DATABASE entretien_tech;
USE entretien_tech;
CREATE TABLE images (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name VARCHAR(500) NOT NULL,
  url VARCHAR(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO images (name, url) VALUES ('cerf', 'https://images.pexels.com/photos/11220223/pexels-photo-11220223.jpeg');
INSERT INTO images (name, url) VALUES ('coeur in the car', 'https://images.pexels.com/photos/6372804/pexels-photo-6372804.jpeg');
INSERT INTO images (name, url) VALUES ('dog in the snow', 'https://images.pexels.com/photos/13334106/pexels-photo-13334106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');