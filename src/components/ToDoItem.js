import React from 'react';
import './ToDoItem.css';

function ToDoItem({
  todo,
  toggleEditToDoForm,
  deleteToDoFromArray,
  grabIdAndTitle,
}) {
  return (
    <div className='todo-item-cont'>
      <div className='todo-item-title'>
        <div>{todo.title}</div>
      </div>
      <button
        className='todo-item-edit-button'
        onClick={(e) => {
          toggleEditToDoForm();
          grabIdAndTitle(todo.id, todo.title);
        }}
      >
        Edit
      </button>
      <button
        className='todo-item-delete-button'
        onClick={(e) => {
          deleteToDoFromArray(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
