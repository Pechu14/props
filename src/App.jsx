import React, { useState } from 'react';
import Task from '../src/components/Task'
import AddTaskForm  from '../src/components/AddTaskForm'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);
 
  const añadirTarea = (textoTarea) => {
    const nuevaTarea = {
      id: tasks.length +1,
      text: textoTarea,
      completed: false
    }
    setTasks ([ ...tasks, nuevaTarea]);
  }

  const borrarTask = (taskId) =>{
    setTasks(tasks.filter(task => task.id !== taskId))
  };

  const marcarTask = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed} : task))
  };
  

  return (
    <>
    <h1>Lista de tareas</h1>
    <AddTaskForm   añadirTarea={añadirTarea} />
    <ul>
      {tasks.map(task => (
        <Task
         key= {task.id}
         task = {task}
         borrarTask = {borrarTask}
         marcarTask = {marcarTask}
         />

      ))}

    </ul>
    </>
  );
};

export default App;
