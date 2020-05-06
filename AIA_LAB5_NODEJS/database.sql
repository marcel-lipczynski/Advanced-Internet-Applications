CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` double unsigned NOT NULL,
  `imageUrl` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO products(name,price,imageUrl) VALUES('Boxing gloves', 10.99, 'https://bit.ly/2KZzWmy');
INSERT INTO products(name,price,imageUrl) VALUES('Boxing helmet', 30.99, 'https://bit.ly/3fpSkD5');
INSERT INTO products(name,price,imageUrl) VALUES('Boxing bandage', 2.99, 'https://bit.ly/2W6ieEo');
INSERT INTO products(name,price,imageUrl) VALUES('Boxing bag', 100.99, 'https://bit.ly/2YGaomn');