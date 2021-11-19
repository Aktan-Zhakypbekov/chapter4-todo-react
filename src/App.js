import React, { useState, useEffect } from 'react';
import AddToDoForm from './modals/AddToDoForm';
import EditToDoForm from './modals/EditToDoForm';
import Display from './components/Display';
import uniqid from 'uniqid';

function App() {
  const [todos, setTodos] = useState([]);
  const [addToDoFormOpen, setAddToDoFormOpen] = useState(false);
  const [editToDoFormOpen, setEditToDoFormOpen] = useState(false);
  const [idValue, setIdValue] = useState(null);
  const [toDoTitle, setToDoTitle] = useState('');

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('todos'))) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    } else {
      localStorage.setItem('todos', JSON.stringify([]));
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  function grabIdAndTitle(id, title) {
    setIdValue(id);
    setToDoTitle(title);
  }

  function toggleAddToDoForm() {
    setAddToDoFormOpen((prev) => {
      prev = !prev;
      return prev;
    });
  }
  function toggleEditToDoForm() {
    setEditToDoFormOpen((prev) => {
      prev = !prev;
      return prev;
    });
  }

  function addToDoToArray(title) {
    setTodos(
      todos.concat({
        id: uniqid(),
        title: title,
      })
    );
  }

  function deleteToDoFromArray(id) {
    setTodos(todos.filter((elem) => elem.id !== id));
  }

  function editToDoInArray(value) {
    setTodos(
      todos.map((elem) => {
        if (elem.id === idValue) {
          elem.title = value;
        }
        return elem;
      })
    );
  }

  return (
    <div className='app-cont'>
      {addToDoFormOpen ? (
        <AddToDoForm
          toggleAddToDoForm={toggleAddToDoForm}
          addToDoToArray={addToDoToArray}
        />
      ) : null}
      {editToDoFormOpen ? (
        <EditToDoForm
          toggleEditToDoForm={toggleEditToDoForm}
          editToDoInArray={editToDoInArray}
          toDoTitle={toDoTitle}
        />
      ) : null}
      <header className='header'>
        <h1>React To Do App</h1>
      </header>
      <main className='main'>
        <button className='add-todo-button' onClick={toggleAddToDoForm}>
          + Add todo
        </button>
        <Display
          todos={todos}
          toggleEditToDoForm={toggleEditToDoForm}
          deleteToDoFromArray={deleteToDoFromArray}
          grabIdAndTitle={grabIdAndTitle}
        />
      </main>
      <footer className='footer'>Made by AZ</footer>
    </div>
  );
}

export default App;
