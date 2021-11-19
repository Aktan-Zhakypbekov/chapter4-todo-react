import React from 'react';
import ToDoItem from './ToDoItem';

function Display({
  todos,
  toggleEditToDoForm,
  deleteToDoFromArray,
  grabIdAndTitle,
}) {
  return (
    <div className='display-cont'>
      {todos.map((elem) => {
        return (
          <ToDoItem
            todo={elem}
            toggleEditToDoForm={toggleEditToDoForm}
            deleteToDoFromArray={deleteToDoFromArray}
            grabIdAndTitle={grabIdAndTitle}
            key={elem.id}
          />
        );
      })}
    </div>
  );
}

export default Display;
