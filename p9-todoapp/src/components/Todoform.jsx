import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext'

function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useToDo()
    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, isCompleted: false })
        setTodo('')
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className="flex gap-x-2 max-w-full bg-white/40 backdrop-blur-lg p-2 rounded-xl shadow-lg border border-black/5"
        >
            <input
                type="text"
                placeholder="Enter you task here...."
                className="w-full bg-white/70 rounded-lg px-4 py-2 outline-none text-gray-700 placeholder-gray-400 
          border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 
          shadow-inner transition-colors duration-200"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-lg px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium
          shadow-md hover:shadow-lg border border-green-600/20 shrink-0"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;

