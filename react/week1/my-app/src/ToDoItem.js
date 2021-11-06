function ToDoItem(props) {
  return (
    <li>
      <h3 className="list">
        {props.description}: {props.deadline}
      </h3>
    </li>
  );
}

export default ToDoItem;
