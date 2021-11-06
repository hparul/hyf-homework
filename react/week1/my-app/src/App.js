//import logo from './logo.svg';
import './App.css';
import './To-Do-Item.css';



import ToDoItem from './ToDoItem.js';
import ToDoList from './ToDoList.js';


function App() {

  return (

    <div className="App">
      <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJoynbf7Cqar_m8fr8VWdKIVnDT-oampspA&usqp=CAU" alt=" girl with list" className="App-logo" />
        <ul>
          {
            ToDoList.map(user => {
              return (
                <ToDoItem description={user.description} deadline={user.deadline} />
              );
            })
          }
        </ul>
      </header>
    </div>
  );
}


export default App;
