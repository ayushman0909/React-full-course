import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import TodoContextProvider from './Context/TodoContextProvider'
import TodoContext from './Context/TodoContext'
import TodoItem from './TodoItem'
const App = () => {
  const {todos}=useContext(TodoContext)
  return (
    
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {todos.map((EachTodo)=>(
                      <TodoItem key={EachTodo.id} todo={EachTodo}/>
                    )
                      )}
                    </div>
                </div>
            </div>
           
  )
}

export default App
