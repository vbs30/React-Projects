import React, { useState } from 'react'
import { useToDo } from '../contexts/ToDoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useToDo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
      className={`flex items-center border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${
        todo.completed ? "bg-gradient-to-r from-green-200 to-green-300" : "bg-gradient-to-r from-purple-200 to-purple-300"
      }`}
    >
      <div className="flex items-center h-full">
        <input
          type="checkbox"
          className="cursor-pointer w-5 h-5 accent-purple-600 transition-transform duration-200 hover:scale-110"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
      </div>
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg py-1 transition-all duration-300 focus:ring-2 focus:ring-purple-400 ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${
          todo.completed 
            ? "line-through text-gray-600 italic" 
            : "text-gray-800"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-white/50 hover:bg-white/80 shrink-0 disabled:opacity-50 transition-all duration-200 hover:scale-105 hover:shadow-md disabled:hover:scale-100 disabled:hover:shadow-none"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-white/50 hover:bg-red-100 shrink-0 transition-all duration-200 hover:scale-105 hover:shadow-md"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
    );
}

export default TodoItem;
