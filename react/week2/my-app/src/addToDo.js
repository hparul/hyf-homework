//import ToDoArray from "./ToDoList";
import ToDoRow from "./ToDoRow.js";


export default function AddTodo(props) {
  const { ToDos } = props;

import React, { useState } from "react";

//export default function AddTodo(props) {
const AddTodo = (props) => {
  const { ToDos, setToDos } = useState([]);


  return (
    <div>
      <ul>

        {ToDos.map((user) => {

        {props.ToDos.map((user) => {

          return (
            <div>
              <ToDoRow
                id={user.id}
                description={user.description}
                deadline={user.deadline}
                isCompleted={user.completed}
                list={ToDos}


                user={user}
                setToDos = {props.setToDos}

              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}



export default AddTodo;

