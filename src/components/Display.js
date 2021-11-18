import React from 'react';
import ToDoItem from './ToDoItem';

function Display({ todos, toggleEditToDoForm }) {
  return (
    <div className='display-cont'>
      {todos.map((elem) => {
        return (
          <ToDoItem
            title={elem.title}
            toggleEditToDoForm={toggleEditToDoForm}
          />
        );
      })}
    </div>
  );
}

export default Display;
