import React, { useState } from 'react';
//data
import data from "./data.json";

//components
import Header from "./component/header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';


//import { TableSortLabel } from '@material-ui/core';


function App() {
  const [ toDoList, setToDoList ] = useState(data);

  //Changes the state of a task to either complete or uncomplete. 
  //If its complete then the text of the todo list will have a strike through. 
  //Once changes are made it sets the new To-Do List to the updated version.
  const handleToggle = (id) => {
    let mapped  = toDoList.map(task => {
    return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
    });
    setToDoList(mapped);
  }

  //Takes the To-Do List and filters through it. 
  //This then returns all items that are not completed. 
  //Once we have that new list just set that to be the To-Do List being displayed.
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
    <Header/>
    
    <ToDoList 
      toDoList = { toDoList } 
      handleToggle = {handleToggle} 
      handleFilter = {handleFilter} />
    
    <ToDoForm 
      addTask = {addTask} />
    </div>
  );
}

export default App;
