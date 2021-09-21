SELECT
  count(*)
FROM
  task;
--task1--
SELECT
  due_date
FROM
  task
WHERE
  due_date IS NULL;
--task2--
SELECT
  title,
  name
FROM
  status
  JOIN task ON status.id = task.status_id
WHERE
  name = 'done';
--task3--
SELECT
  title,
  name
FROM
  status
  JOIN task ON status.id = task.status_id
WHERE
  name != 'done';
--task4--
SELECT
  title,
  created
FROM
  task
ORDER BY
  created DESC;
--task5--
SELECT
  title,
  created
FROM
  task
ORDER BY
  created DESC
LIMIT
  1;
--task6--
SELECT
  title,
  description,
  due_date
FROM
  task
WHERE
  title LIKE "%database%"
  OR description LIKE "%database%";
--task7--
SELECT
  title,
  name
FROM
  status
  JOIN task ON status.id = task.status_id;
--task8--
SELECT
  COUNT(name),
  name
FROM
  status
  JOIN task ON status.id = task.status_id
GROUP BY
  name;
--task9--
SELECT
  COUNT(name),
  name
FROM
  status
  JOIN task ON status.id = task.status_id
GROUP BY
  name
ORDER BY
  COUNT(name) DESC;
--task10--