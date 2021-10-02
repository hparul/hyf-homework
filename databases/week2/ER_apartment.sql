use hyf_lesson_ER;

CREATE TABLE `appartment` (
  `id` int,
  `address` varchar(255),
  `created` datetime,
  `owner` varchar(50),
  `area` int,
  PRIMARY KEY (`id`)
);

drop table appartment;



CREATE TABLE `room` (
  `id` int,
  `type` varchar(20),
  `size` int,
  `apartment_id` int,
  PRIMARY KEY (`id`),
 
  CONSTRAINT `fk_apartment` FOREIGN KEY (`apartment_id`) REFERENCES `appartment` (`id`) ON DELETE CASCADE
);

CREATE TABLE `window` (
  `id` int,
  `color` varchar(20),
  `size` int,
  `room_id` int,
  PRIMARY KEY (`id`),
 CONSTRAINT `fk_room` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE
);

CREATE TABLE `door` (
  `id` int,
  `color` varchar(20),
  `size` int,
  `room_id` int,
  PRIMARY KEY (`id`)
);


select * from appartment;
select * from room;
select * from door;
