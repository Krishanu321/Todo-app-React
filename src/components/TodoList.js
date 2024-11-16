import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter new to-do"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add To-Do</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
