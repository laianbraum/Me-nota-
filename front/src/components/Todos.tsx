import React, { useState, useEffect } from 'react';
import { BiCheckbox, BiCheckboxChecked, BiUpload } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';

import api from '../services/api';

interface todo{
  id: number,
  description: string,
  isComplete: boolean
}

function Todos(){
  
  const [ toDos, setToDos ] = useState<todo[]>([]);
  const [ toDoText, setTodoText ] = useState<string>("");  

  useEffect(() => {
    
    api.get('todo').then(response => {
      setToDos(response.data);
    })
  }, [])

  const refreshToDo = () => {
    api.get('todo').then(response => {
      setToDos(response.data);
    })
  }

  const addTodo = () => {
    api.post('/todo', {description: toDoText})
  } 

  const removeTodo = ( id: number ) => {
    api.delete(`/todo/${id}`);

    const removedArr = [...toDos].filter(todo => todo.id !== id);
    setToDos(removedArr);
  }

  const completeTodo = ( id: number ) => {
    const updatedTodos = toDos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setToDos(updatedTodos);
  }

  return (
    <div className="todo-wrapper">
      <div className="post-todo">
        <input type="text" placeholder="Crie sua tarefa" onChange={(e) => setTodoText(e.target.value)}/>
        <BiUpload size={30} onClick={addTodo && refreshToDo} className="upload" color="#1c1c1b"/>
      </div>
      <div className="todos">
        {toDos.map((todo, index) => {
          return(
            <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                key={index}
                >
                <div className="check" onClick={() => completeTodo(todo.id)}>
                  {
                    todo.isComplete ? <BiCheckboxChecked size={25} color="#00ff00"/> : <BiCheckbox size={25} color="#1c1c1b"/>
                  }
                </div>
                <div key={todo.id}>
                  {todo.description}
                </div>
                <div className='icons'>
                  <TiTrash
                    size={25}
                    color={todo.isComplete ? "#00ff00" : "black"}
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                    />
                </div>
              </div>
            )
          }
        )}
      </div>
      
    </div>
  );
}

export default Todos;