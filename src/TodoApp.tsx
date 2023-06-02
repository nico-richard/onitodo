import { useState } from 'react'
import './styles/App.sass'
import { HeaderButton } from './components/Button'
import { TodoList } from './components/TodoList'
import initialTodos from './data/todos.json'
import { TodoItem } from './models/todo.model'
import { AddTodo } from './components/AddTodo'
import Header from './components/Header'

export default function TodoApp() {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos)
  const [addTodoVisible, setAddTodoVisible] = useState<boolean>(false)

  function handleAdd(title: string, description: string): void {
    const newTodo: TodoItem = {
      id: todos.length + 1,
      title: title,
      description: description,
      done: false,
    }
    setTodos([...todos, newTodo])
  }

  function handleDelete(id: number): void {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  function handleSearch(): void {
    return
  }

  function handleAllDone(): void {
    const todosUpdated: TodoItem[] = todos.map((todo) => {
      todo.done = true
      return todo
    })
    setTodos(todosUpdated)
  }

  function handleAllOngoing(): void {
    const todosUpdated: TodoItem[] = todos.map((todo) => {
      todo.done = false
      return todo
    })
    setTodos(todosUpdated)
  }

  function updateStatus(id: number): void {
    const todosUpdated: TodoItem[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(todosUpdated)
  }

  return (
    <>
      <Header />
      <div className="app">
        <div className="todo-options">
          <HeaderButton text="Add todo" handleClick={() => setAddTodoVisible(!addTodoVisible)} />
          <HeaderButton text="Search todo" handleClick={handleSearch} />
          <HeaderButton text="All Done" handleClick={handleAllDone} />
          <HeaderButton text="All Ongoing" handleClick={handleAllOngoing} />
        </div>
        {addTodoVisible && <AddTodo onAddTodo={handleAdd} />}
        <div className="todo-lists">
          <TodoList data={todos} isDone={false} updateStatus={updateStatus} deleteTodo={handleDelete} />
          <TodoList data={todos} isDone={true} updateStatus={updateStatus} deleteTodo={handleDelete} />
        </div>
      </div>
    </>
  )
}
