CREATE TABLE IF NOT EXISTS `consumption` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `food` char(55) DEFAULT NULL,
  `person` varchar(55) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `barcode` varchar(255) DEFAULT NULL,
  `first_name` char(55) DEFAULT NULL,
  `last_name` char(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
