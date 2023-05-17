import { useState } from "react";
import { TodoButton } from "./button";
import "./todoItem.sass";

export interface TodoItemProps {
  title: string;
  description?: string;
}

export function TodoItem({ title, description }: TodoItemProps): JSX.Element {
  const [done, setDone] = useState(false);

  return (
    <div className="todoItem">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="edit">
        <div className="done edit-section">
          <TodoButton
            text={done ? "Not Done" : "Done"}
            handleClick={() => setDone(!done)}
          />
        </div>
        <div className="delete edit-section">
          <TodoButton text="Delete" handleClick={() => setDone(!done)} />
        </div>
      </div>
    </div>
  );
}
