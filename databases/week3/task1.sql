use hyf_lesson3;
create table `meal`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(20) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int(10) NULL DEFAULT NULL,
  `price` decimal(10)  NOT NULL,
  `created_date` date ,
  PRIMARY KEY (`id`)
  );
  CREATE TABLE `Reservation` (
  `id` int NOT NULL,
  `number_of_guests` int DEFAULT NULL,
  `meal_id` int DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `contact_phonenumber` varchar(255) DEFAULT NULL,
  `contact_name` varchar(20) DEFAULT NULL,
  `contact_email` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ;
CREATE TABLE `Review` (
  `id` int DEFAULT NULL,
  `title` varchar(20) DEFAULT NULL,
  `description` text,
  `meal_id` int DEFAULT NULL,
  `stars` int DEFAULT NULL,
  `created_date` date DEFAULT NULL
);
  --meals
INSERT INTO meal(id, title, `description`, `location`, `when`, max_reservations, price, created_date)
 VALUES (1,'closed clubwrap','green veggies and sweetpotato','frederiksberg','2021-10-05 12:25:00',4,70,'2021-10-03');
 INSERT INTO meal(id, title, `description`, `location`, `when`, max_reservations, price, created_date)
 VALUES (2,'closed chickenwrap','green veggies and chicken','lynby','2021-10-06 11:25:00',3,30,'2021-10-05');
 INSERT INTO meal(id, title, `description`, `location`, `when`, max_reservations, price, created_date)
 VALUES (3,'sweetpotato fries','exotic vegetables and sweetpotato','hellerup','2021-10-07 10:25:00',5,90,'2021-10-04');
 INSERT INTO meal(id, title, `description`, `location`, `when`, max_reservations, price, created_date)
 VALUES (4,'beet juice','green veggies and beet','taastrup','2021-10-08 14:25:00',7,90,'2021-10-07');
 INSERT INTO meal(id, title, `description`, `location`, `when`, max_reservations, price, created_date)
 VALUES (5,'chicken salad','apple,quinoa and fresh chicken','bellacenter','2021-10-10 15:25:00',8,40,'2021-10-08');
 INSERT INTO meal(id, title, `description`, `location`, `when`, max_reservations, price, created_date)
 VALUES (6,'spinach shake','green veggies and orange,carrots','norrebro','2021-10-015 17:25:00',9,50,'2021-10-12');
 --reservation

 INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (1,4,2,'2021-10-09','32-34-54-56','soren','soren@gmail.com');
 INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (2,5,1,'2021-10-23','32-45-54-56','paul','paul@gmail.com');
 INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (3,6,5,'2021-10-018','35-84-54-56','mona','mona@gmail.com');
 INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (4,4,2,'2021-10-25','32-94-58-89','lily','lily@gmail.com');
 INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (5,2,6,'2021-10-12','49-34-04-56','jack','jack@gmail.com');

 --review
  
 INSERT INTO Review(id, title, `description`, meal_id, stars, created_date)
 VALUES (2,'wonderful','tastes superamazing',3,5,'2021-11-11');
 INSERT INTO Review(id, title, `description`, meal_id, stars, created_date)
 VALUES (3,'nice','tastes good',1,3,'2021-11-10');
 INSERT INTO Review(id, title, `description`, meal_id, stars, created_date)
 VALUES (4,'great','tastes amazing',6,4,'2021-11-18');
 INSERT INTO Review(id, title, `description`, meal_id, stars, created_date)
 VALUES (5,'wonderful','tastes superamazing',3,5,'2021-11-09');

--from meal table
SELECT * from meal;
INSERT INTO meal(id,title,`description`,`location`,`when`,max_reservations,price,created_date)
VALUES(7,'cheeseburger','salad and potatopatty','roslikde','2021-11-10 16:09:50',5,40,'2021-11-09');
SELECT title from meal where id=4;
UPDATE meal
SET location="herlev",description="beet juice with mushroom"
where id=4;
SELECT * from meal;
delete from meal WHERE id=6;

--frm reservation table
SELECT * from Reservation;
INSERT INTO Reservation(id, number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
 VALUES (6,8,7,'2021-10-19','78-34-54-56','larsen','larsen@gmail.com');
 SELECT contact_name from Reservation WHERE id =5;
 update Reservation
 set number_of_guests=9
 where id=5;
 update Reservation
 set number_of_guests=2
 where id=4;
 update Reservation
 set number_of_guests=1
 where id=1;
 delete from Reservation where id = 2;

 --from review table
 SELECT * from Review;
INSERT INTO Review(id, title, `description`, meal_id, stars, created_date)
 VALUES (6,'nice','tastes good',3,3,'2021-11-20');
 SELECT title from Review WHERE id =5;
 update Review
 set stars=4
 where id=5;
 delete from Review where id = 3;


--Get meals that has a price smaller than a specific price
select title,price from meal where price < 50;
--Get meals that still has available reservations
select meal.title as available, max_reservations, number_of_guests,(max_reservations - number_of_guests)as reser_avbl,Reservation.created_date  from meal 
join Reservation on meal.id=Reservation.meal_id
where (max_reservations-number_of_guests>0);
--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
select title,description from meal
WHERE description like '%beet juice with%';
--Get meals that has been created between two dates
select title,created_date from meal WHERE created_date BETWEEN '2021-10-04' and '2021-10-20';
--Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 4;
--Get the meals that have good reviews
SELECT meal.title,meal.id,Review.stars,Review.description from meal
join Review on meal.id=Review.meal_id
where stars>=4; 
 --Get reservations for a specific meal sorted by created_date 
SELECT meal.title,  SUM(Reservation.number_of_guests), Reservation.created_date
FROM meal
JOIN Reservation ON (meal.id=Reservation.meal_id)
GROUP BY Reservation.created_date,meal.title;
ORDER BY Reservation.created_date;
--Sort all meals by average number of stars in the reviews
select avg(Review.stars) ,meal.title,Review.meal_id from meal
join Review on meal.id=Review.meal_id
group by meal.id order by avg(Review.stars) ;





