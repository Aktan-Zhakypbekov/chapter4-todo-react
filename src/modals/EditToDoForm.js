import React, { useState } from 'react';
import './EditToDoForm.css';

function EditToDoForm({ toggleEditToDoForm, editToDoInArray, toDoTitle }) {
  const [title, setTitle] = useState(toDoTitle);

  function onInputChange(value) {
    setTitle(value);
  }

  return (
    <div className='edit-todo-form-cover'>
      <div className='edit-todo-form-cont'>
        <div className='edit-todo-form-cont__title'>
          <div>Edit to do form</div>
        </div>
        <form
          className='edit-todo-form-cont__form'
          onSubmit={(e) => {
            e.preventDefault();
            editToDoInArray(title);
            setTitle('');
            toggleEditToDoForm();
          }}
        >
          <input
            type='text'
            className='edit-todo-form-cont__form__input'
            value={title}
            required
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
          />
          <button className='edit-todo-form-cont__form__add-button'>
            Submit todo edit
          </button>
        </form>
        <button onClick={toggleEditToDoForm}> Close </button>
      </div>
    </div>
  );
}

export default EditToDoForm;
