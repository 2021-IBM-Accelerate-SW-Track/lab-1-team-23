import React, { useState } from 'react';
import { Button } from '@material-ui/core';


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
            <input className = 'text-box'value={userInput} type="text" onChange={handleChange} placeholder="Enter a task"/>
            <br />
            <Button className = 'submit-button' variant="contained" color="primary" onClick={ handleSubmit }> Add </Button>
        </form>    
    );
};



export default ToDoForm;