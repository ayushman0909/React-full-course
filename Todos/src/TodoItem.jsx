import { useContext, useEffect, useRef, useState } from "react";
import TodoContext from "./Context/TodoContext";

function TodoItem({ todo }) {
    
const [isTodoEditable,setIsTodoEditable]=useState(false);
const {todos,AddTodo,UpdateTodo,DeleteTodo,ToggleCompleted}=useContext(TodoContext);
const inputRef=useRef(null);
useEffect(()=>{
     if (isTodoEditable){
    inputRef.current?.focus()}
},[isTodoEditable])
    return (
        <div
            className={`flex justify-between items-center w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >   <div>
           {isTodoEditable ?
           <>
             <input type="text" ref={inputRef}  value={todo.todo} onChange={(e)=>UpdateTodo(todo.id,e.target.value) } />
              </> 
            :
            <>
                <input type="checkbox" checked={todo.completed} onChange={()=>ToggleCompleted(todo.id)} />
                <label htmlFor="checkbox" className={`${todo.completed ?"line-through":""} ml-2`}>{todo.todo}</label>
            </>
            }
             </div>
            
            <div>
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 mr-5"
                onClick={
                    ()=>{
                        setIsTodoEditable(!isTodoEditable)
                    }
                }
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={()=>DeleteTodo(todo.id)}
            >
                ❌
            </button>
            </div>
        </div>
    );
}

export default TodoItem;
