import { useEffect, useState } from 'react'
import { ToDoProvider } from './contexts/ToDoContext'
import TodoForm from './components/Todoform'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_25%)] pointer-events-none"></div>
      
      <div 
        className="w-full max-w-2xl mx-auto rounded-xl px-6 py-8 
          bg-white/10 backdrop-blur-xl shadow-2xl 
          border border-white/20 relative z-10
          bg-gradient-to-b from-white/20 to-white/5"
      >
        <h1 className="text-3xl font-bold text-center mb-8 mt-2 
          bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text
          drop-shadow-lg"
        >
          Modern Todo List
        </h1>
        
        <div className="mb-6 transform hover:scale-[1.01] transition-transform duration-200">
          <TodoForm />
        </div>
        
        <div className="flex flex-col gap-y-4">
          {todos.map((todo) => (
            <div 
              key={todo.id} 
              className="w-full transform hover:scale-[1.01] transition-transform duration-200"
            >
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </ToDoProvider>
  )
}

export default App
