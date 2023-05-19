import { TodoItem } from '../models/todo.model'
import { TodoButton } from './Button'

interface TodoItemProps {
  item: TodoItem
  updateStatus: (item: number) => void
}

export function Todo({ item, updateStatus }: TodoItemProps): JSX.Element {
  return (
    <li className="todoItem">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className="edit">
        <div className="done edit-section">
          <TodoButton text={item.done ? 'Not Done' : 'Done'} handleClick={() => updateStatus(item.id)} />
        </div>
        <div className="delete edit-section">
          <TodoButton text="Delete" handleClick={() => {}} />
        </div>
      </div>
    </li>
  )
}
