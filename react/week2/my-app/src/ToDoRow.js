



 import {useState} from 'react'
 import ToDoArray from './ToDoList';
function ToDoRow(props) {
  const {description} = props;
   const [list, setList] = useState(ToDoArray);

 /*  const handleRemove=(id)=> {

    
    console.log(list);
    console.log(id, list);
    const newList = list.filter((item) => item.id !== id);

     setList(newList);
    console.log(newList);
    list = newList;
  }; */

  const handleRemove = (user) => {
    console.log(user);
    props.setToDos(prev => prev.filter((item) => item.id !== props.user.id))
  }


 
  return (
    <li>
      <div className="checkbox">
        <input type="checkbox" />
        <label className="strike-through">{description}</label>
        <button onClick={() => handleRemove(props.user)}>Delete</button>
                
      </div>
    </li>
  );
}
// handleRemove(props.id, props.list)

export default ToDoRow;
