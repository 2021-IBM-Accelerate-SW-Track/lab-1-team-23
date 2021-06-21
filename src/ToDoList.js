import React from 'react';
import ToDo from './ToDo';
import Button from '@material-ui/core/Button';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} 
                    handleToggle={handleToggle} 
                    handleFilter={handleFilter}/>
                )
            })}
            <Button variant="contained" color="secondary" style={{margin: '20px'}} onClick={ handleFilter }> Delete Completed Task(s) </Button>
        </div>
    );
};

export default ToDoList;