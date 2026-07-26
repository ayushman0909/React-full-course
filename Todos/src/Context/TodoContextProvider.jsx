import React, { useState,useEffect } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const savedTodos=JSON.parse (localStorage.getItem("todos"));
    if(savedTodos && savedTodos.length>0){
      setTodos(savedTodos)
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  const AddTodo = (todo) => {
    const newTodo = {
      id: crypto.randomUUID(),
      todo: todo,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const UpdateTodo=(id,newUpdatedTodo)=>{
   setTodos((prevTodos)=>prevTodos.map((EachTodo)=>EachTodo.id===id ? {...EachTodo,todo:newUpdatedTodo}:EachTodo))
  }
  const DeleteTodo=(id)=>{
    setTodos((prevTodos)=>prevTodos.filter((EachTodo)=>EachTodo.id !==id))
  }
  
  const ToggleCompleted=(id)=>{
      setTodos((prevTodos)=>prevTodos.map(((EachTodo)=>EachTodo.id===id ? {...EachTodo,completed:!EachTodo.completed}:EachTodo)))
  }

  return (
    <TodoContext.Provider value={{todos,AddTodo,UpdateTodo,DeleteTodo,ToggleCompleted}}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
