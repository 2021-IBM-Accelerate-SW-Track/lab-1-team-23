<<<<<<< HEAD
import { Button } from '@material-ui/core';
=======

>>>>>>> 942df6024ddfb540649bbe55d1c2697957735ad5
import React, { useState } from 'react';


const ToDoForm = ({ addTask }) => 
{

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => 
    {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
<<<<<<< HEAD
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <Button variant="contained" color="secondary" style={{margin: '20px'}} onClick={ handleSubmit }> Submit </Button>
        </form>
=======
            <input className = 'text-box'value={userInput} type="text" onChange={handleChange} placeholder="Enter a task"/>
            <br />
            <Button className = 'submit-button' variant="contained" color="primary" onClick={ handleSubmit }> Add </Button>
        </form>    
>>>>>>> 942df6024ddfb540649bbe55d1c2697957735ad5
    );
};



export default ToDoForm;