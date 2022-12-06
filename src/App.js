import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTextChange = (e) => {
    return setText(e.target.value);
  }
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("Inside handle create " + text);
    setTodos([...todos, { todotext: text, id: Math.random() * 10 }]);
    setText("");
    return
  }

  //Below are stepps to Save todo data to local storage and then get from local storage.. so that after refresh also data will not be lost

  useEffect(() => {
    togetLocalTodos();
  },[]) // empty array coz we want it to run only once when app started  and it should be run before savingLocal function

  useEffect(() => {
    savingLocalTodos();   //when todos state changes this will run
  },[todos])

  const savingLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos)); // saving our todos to local storage
  }
  const togetLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([])); // when no data present display empty  
    }
    else{
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos); // when data present then display the stored data to current state using setTodos
    }
  }
  return (
    <div className="Header">
      <h2 className="Heading">My TODO App</h2>
      <div className="Body">
        <form className="form">
          <input className="inputTxt" type="text" value={text} placeholder="Type your TODO" onChange={handleTextChange}></input>
          <input className="SubmitBtn" onClick={handleCreate} type="submit" value="Create"></input>
        </form>
        <h3 className="midHeading">Your TODOs</h3>
        {todos.map((todo) => {
          return (
            <TodoItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} todotext={todo.todotext} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
