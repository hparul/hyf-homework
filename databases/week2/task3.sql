use hyf_lesson2;
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT title,task_id,user_id from task 
join user_task on task.id=user_task.user_id
--Get all the tasks assigned to users whose email ends in @spotify.com
select title from task where id in (select task_id from user_task where user_id in (select id from user WHERE email like '%@spotify.com%'));
--another way
SELECT user.id,task.title,user.email FROM user, user_task, task WHERE user.id = user_task.user_id AND user_task.task_id = task.id AND user.email LIKE "%@spotify.com";
--Get all the tasks for 'Donald Duck' with status 'Not started'
select title,status_id from task where id in (select task_id from user_task where user_id in (select id from user where name='Donald Duck'))
and  status_id in (select id from status where name='Not started');
--another way
SELECT * FROM task JOIN user_task ON task.id = user_task.task_id JOIN user ON user.id = user_task.user_id WHERE user.name = 'Donald Duck' AND task.status_id = 1;
--Get all the tasks for 'Maryrose Meadows' that were created in september
select created,title from task where id in (select task_id from user_task where user_id in (select id from user where name='Maryrose Meadows'))
 and month(created)=9;
--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc.
 select month(created),COUNT(created) as numberOfTasks from task group by month(created);

 



