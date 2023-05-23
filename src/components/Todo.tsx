import { TodoItem } from '../models/todo.model'
import { TodoButton } from './Button'

interface TodoItemProps {
  item: TodoItem
  updateStatus: (item: number) => void
  deleteTodo: (item: number) => void
}

export function Todo({ item, updateStatus, deleteTodo }: TodoItemProps): JSX.Element {
  return (
    <li className="todoItem">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className="edit">
        <div className="done">
          <TodoButton text={item.done ? 'Not Done' : 'Done'} handleClick={() => updateStatus(item.id)} />
        </div>
        <div className="delete">
          <TodoButton text="Delete" handleClick={() => deleteTodo(item.id)} />
        </div>
      </div>
    </li>
  )
}
