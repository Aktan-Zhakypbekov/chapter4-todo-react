import React, { useState } from 'react';
import './AddToDoForm.css';

function AddToDoForm({ toggleAddToDoForm }) {
  return (
    <div className='add-todo-form-cover'>
      <div className='add-todo-form-cont'>
        <div className='add-todo-form-cont__title'>
          <div>Add to do form</div>
        </div>
        <form className='add-todo-form-cont__form'>
          <input
            type='text'
            className='add-todo-form-cont__form__input'
            required
          />
          <button className='add-todo-form-cont__form__add-button'>
            Add todo
          </button>
        </form>
        <button onClick={toggleAddToDoForm}> Close </button>
      </div>
    </div>
  );
}

export default AddToDoForm;
