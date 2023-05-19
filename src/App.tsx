import { useState } from 'react'
import './styles/App.sass'
import { HeaderButton } from './components/Button'
import { TodoList } from './components/TodoList'
import initialTodos from './data/todos.json'
import { TodoItem } from './models/todo.model'
import { AddTodo } from './components/AddTodo'

function App() {
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

  function handleSearch(): void {}

  function handleAllDone(): void {}

  function handleAllOngoing(): void {}

  function updateStatus(id: number): void {
    let todosCopy: TodoItem[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(todosCopy)
  }

  return (
    <div className="app">
      <img className="logo" src="/logo.png" alt="logo" />
      <div className="title">Todo List</div>
      <div className="todo-options">
        <HeaderButton text="Add todo" handleClick={() => setAddTodoVisible(!addTodoVisible)} />
        <HeaderButton text="Search todo" handleClick={handleSearch} />
        <HeaderButton text="All Done" handleClick={handleAllDone} />
        <HeaderButton text="All Ongoing" handleClick={handleAllOngoing} />
      </div>
      {addTodoVisible && <AddTodo onAddTodo={handleAdd} />}
      <TodoList data={todos} isDone={false} updateStatus={updateStatus} />
      <TodoList data={todos} isDone={true} updateStatus={updateStatus} />
    </div>
  )
}

export default App
