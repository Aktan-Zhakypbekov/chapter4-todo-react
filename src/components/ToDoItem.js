import React from 'react';
import './ToDoItem.css';

function ToDoItem({ title, toggleEditToDoForm }) {
  return (
    <div className='todo-item-cont'>
      <div className='todo-item-title'>
        <div>{title}</div>
      </div>
      <button className='todo-item-edit-button' onClick={toggleEditToDoForm}>
        Edit
      </button>
      <button className='todo-item-delete-button'>Delete</button>
    </div>
  );
}

export default ToDoItem;
