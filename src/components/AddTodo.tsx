import { useState } from 'react'

interface AddTodoProps {
  onAddTodo: (title: string, description: string) => void
}

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="add-todo">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button
        className="todo-button"
        onClick={() => {
          onAddTodo(title, description)
          setTitle('')
          setDescription('')
        }}>
        Add
      </button>
    </div>
  )
}
