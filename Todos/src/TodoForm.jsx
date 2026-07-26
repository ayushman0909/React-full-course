import { useContext, useState } from "react";
import TodoContext from "./Context/TodoContext";

function TodoForm() {
   const{todos,AddTodo,UpdateTodo,DeleteTodo}=useContext(TodoContext);
   const [task,setTask]=useState("")
   const HandleForm=(e)=>{
    e.preventDefault();
    AddTodo(task);
   }
    return (
        <form  className="flex" onSubmit={HandleForm}>
            
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTask(e.target.value)}
            />
            <button  type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

