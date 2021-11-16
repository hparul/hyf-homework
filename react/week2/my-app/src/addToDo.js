//import ToDoArray from "./ToDoList";
import ToDoRow from "./ToDoRow.js";

export default function AddTodo(props) {
  const { ToDos } = props;

  return (
    <div>
      <ul>
        {ToDos.map((user) => {
          return (
            <div>
              <ToDoRow
                id={user.id}
                description={user.description}
                deadline={user.deadline}
                isCompleted={user.completed}
                list={ToDos}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
