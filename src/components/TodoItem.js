import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todos, todo, setTodos, todotext }) {
  const [styling, setStyle] = useState({});
  const handleStyle = () => {
    return setStyle({ opacity: "0.5", textDecoration: "line-through" });
  }
  const handleDelete = () => {
    // i is current element
    setTodos(todos.filter((i) => i.id !== todo.id))  //filter will make new array by following given statement.. 
    //here new array will be made of those element whose id not equals to current todo's id so this will basically eliminate the clicked item
  }
  return (
    <div className="todoitem">
      <div className="todoTxt">
        <p style={styling}>{todotext}</p>
      </div>
      <button className="btn" onClick={handleStyle}><span class="material-icons">
        check
      </span></button>
      <button className="btn" onClick={handleDelete}><span class="material-icons">
        delete
      </span>
      </button>
    </div>
  )
}

export default TodoItem
