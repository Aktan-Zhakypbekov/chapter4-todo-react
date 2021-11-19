import React, { useState } from 'react';
import './AddToDoForm.css';

function AddToDoForm({ toggleAddToDoForm, addToDoToArray }) {
  const [title, setTitle] = useState('');
  function onInputChange(value) {
    setTitle(value);
  }

  return (
    <div className='add-todo-form-cover'>
      <div className='add-todo-form-cont'>
        <div className='add-todo-form-cont__title'>
          <div>Add to do form</div>
        </div>
        <form
          className='add-todo-form-cont__form'
          onSubmit={(e) => {
            e.preventDefault();
            addToDoToArray(title);
            setTitle('');
            toggleAddToDoForm();
          }}
        >
          <input
            type='text'
            className='add-todo-form-cont__form__input'
            required
            value={title}
            onChange={(e) => {
              onInputChange(e.target.value);
            }}
            placeholder='Enter todo title'
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
