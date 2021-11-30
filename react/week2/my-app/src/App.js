import { useState } from "react";
import "./App.css";
import "./To-Do-Item.css";
import AddToDo from "./addToDo";
import Timer from "./timer";
import Header from "./header";
import ToDoArray from "./ToDoList";

function App() {
  const [ToDos, setToDos] = useState(ToDoArray);
  const onAddNewItem = () => {
    console.log(ToDos);
    const arrLen = ToDos.length;
    const newToDos = ToDos.concat({
      id: arrLen + 1,
      description: "random item",
    });
    setToDos(newToDos);
    console.log(newToDos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header text="To Do List" />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJoynbf7Cqar_m8fr8VWdKIVnDT-oampspA&usqp=CAU"
          alt=" girl with list"
          className="App-logo"
        />
        <Timer />
        <button onClick={onAddNewItem}>add todo</button>
        <AddToDo ToDos={ToDos} />
      </header>
    </div>
  );
}

export default App;
