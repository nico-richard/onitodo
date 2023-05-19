import { TodoItem } from '../models/todo.model'
import { Todo } from './Todo'

interface TodoListProps {
  data: TodoItem[]
  isDone: boolean
  updateStatus: (id: number) => void
}

export function TodoList({ data, isDone, updateStatus }: TodoListProps) {
  const list = data
    .filter((todo) => todo.done === isDone)
    .map((todo: TodoItem, index: number) => {
      return <Todo key={index} item={todo} updateStatus={updateStatus} />
    })
  return <ul className="todo-list">{list.length !== 0 ? list : <p>Empty</p>}</ul>
}
