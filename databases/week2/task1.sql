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
  task.status_id =(
    select
      status.id
    from
      status
    where
      status.name = 'In progress'
  )
where
  id = 4;
--task5
update
  task
set
  task.status_id =(
    select
      status.id
    from
      status
    where
      status.name = 'Done'
  )
where
  id = 4;
--task6
DELETE FROM
  task
WHERE
  id = 35;
  