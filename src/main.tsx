import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './App.tsx';
import './styles.css';
import { AddTask } from './components/AddTask.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp />
    <AddTask />
  </React.StrictMode>
);
