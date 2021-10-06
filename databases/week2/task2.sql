CREATE database school_database;
use school_database;



CREATE TABLE `class` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `begins` DATETIME NOT NULL,
  `ends` DATETIME NOT NULL,
  `status` ENUM('not-started', 'ongoing', 'finished'),
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `student` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  `class_id` int(10) unsigned NOT NULL ,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `class` (`id`) ON DELETE CASCADE
);


--student
insert into student (id, name, email, phone, class_id) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795',2);
insert into student (id, name, email, phone, class_id) values (2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467',1);
insert into student (id, name, email, phone, class_id) values (3, 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683',3);
insert into student (id, name, email, phone, class_id) values (4, 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191',4);
insert into student (id, name, email, phone, class_id) values (5, 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931',5);
insert into student (id, name, email, phone, class_id) values (6, 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594',2);
insert into student (id, name, email, phone, class_id) values (7, 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640',1);
insert into student (id, name, email, phone, class_id) values (8, 'Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579',3);
insert into student (id, name, email, phone, class_id) values (9, '王秀英', 'wang.xiuying@weebly.com', '891-952-6749',4);
insert into student (id, name, email, phone, class_id) values (10, 'إلياس', 'elias@github.com', '202-517-6983',5);
insert into student (id, name, email, phone, class_id) values (11, 'Donald Duck', 'donald@duck.com', '200-417-6983',6);
insert into student (id, name, email, phone, class_id) values (12, 'Adam Smith', 'smith@bla.com','102-516-6783', 6);


--class
insert into class (id, name, begins, ends) values (1, 'parul', '2021-09-09', '2022-04-29');
insert into class (id, name, begins, ends) values (2, 'supriya', '2021-09-08', '2022-05-29');
insert into class (id, name, begins, ends) values (3, 'peehu', '2021-09-10', '2022-06-29');
insert into class (id, name, begins, ends) values (4, 'prisha', '2021-10-09', '2022-07-29');
insert into class (id, name, begins, ends) values (5, 'divya', '2021-11-09', '2022-08-29');
insert into class (id, name, begins, ends) values (6, 'jiu', '2021-12-09', '2022-09-29');
insert into class (id, name, begins, ends) values (7, 'florentina', '2021-09-05', '2022-010-29');
insert into class (id, name, begins, ends) values (8, 'simran', '2021-09-01', '2022-11-29');
insert into class (id, name, begins, ends) values (9, 'paul', '2021-03-04', '2022-12-29');

select * from class;
select * from student;

CREATE UNIQUE INDEX idx_sname on student(name);
/* ALTER TABLE class
ADD status VARCHAR(255) NOT NULL;
UPDATE class
set status="not-started" where id=1 OR id=4 or id=7 or id=9;
UPDATE class
set status="ongoing" where id=2 OR id=5 or id=8 ;
UPDATE class
set status="finished" where id=3 OR id=6 ; */

