import { TodoItem } from '../models/todo.model'
import { Todo } from './Todo'

interface TodoListProps {
  data: TodoItem[]
  isDone: boolean
  updateStatus: (id: number) => void
  deleteTodo: (id: number) => void
}

export function TodoList({ data, isDone, updateStatus, deleteTodo }: TodoListProps) {
  const list = data
    .filter((todo) => todo.done === isDone)
    .map((todo: TodoItem, index: number) => {
      return <Todo key={index} item={todo} updateStatus={updateStatus} deleteTodo={deleteTodo} />
    })
  return (
    <div className="todo-list-content">
      <h2 className="todo-list-title">{isDone ? 'Done' : 'To do'}</h2>
      <ul className="todo-list">{list.length !== 0 ? list : <p>Empty</p>}</ul>
    </div>
  )
}
