import React, { useState } from 'react';
import AddToDoForm from './modals/AddToDoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: Math.round(Math.random() * 100), title: 'Do groceries' },
    { id: Math.round(Math.random() * 100), title: 'Do homework' },
    { id: Math.round(Math.random() * 100), title: 'Make todo project' },
  ]);
  let [addToDoFormOpen, setAddToDoFormOpen] = useState(false);

  function toggleAddToDoForm() {
    setAddToDoFormOpen((prev) => {
      prev = !prev;
      return prev;
    });
  }

  return (
    <div className='app-cont'>
      {addToDoFormOpen ? (
        <AddToDoForm toggleAddToDoForm={toggleAddToDoForm} />
      ) : null}
      <header className='header'>
        <h1>React To Do App</h1>
      </header>
      <main className='main'>
        <button className='add-todo-button' onClick={toggleAddToDoForm}>
          + Add todo
        </button>
        <div className='todos-display'>Display</div>
      </main>
      <footer className='footer'>Made by AZ</footer>
    </div>
  );
}

export default App;
