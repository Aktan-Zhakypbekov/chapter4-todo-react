import React from 'react';
import './EditToDoForm.css';

function EditToDoForm({ toggleEditToDoForm }) {
  return (
    <div className='edit-todo-form-cover'>
      <div className='edit-todo-form-cont'>
        <div className='edit-todo-form-cont__title'>
          <div>Edit to do form</div>
        </div>
        <form className='edit-todo-form-cont__form'>
          <input
            type='text'
            className='edit-todo-form-cont__form__input'
            required
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
