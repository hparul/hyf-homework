use hyf_lesson1;
select
  *
from
  task;
--task1
UPDATE
  task
SET
  title = "Wash the car"
where
  id = 1;
--task2
UPDATE
  task
SET
  due_date = "2017-11-09 06:14:31"
where
  id = 2;
--task3
--task4
update
  task
set
  task.status_id =2
where
  id = 4;
--task5
update
  task
set
  task.status_id = 1
where
  id = 4;
--task6
DELETE FROM
  task
WHERE
  id = 35;
  