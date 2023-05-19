interface ButtonProps {
  text: string
  handleClick: () => void
}

export function HeaderButton({ text, handleClick }: ButtonProps): JSX.Element {
  return (
    <button className="header-button" onClick={handleClick}>
      {text}
    </button>
  )
}

export function TodoButton({ text, handleClick }: ButtonProps): JSX.Element {
  return (
    <button className="todo-button" onClick={handleClick}>
      {text}
    </button>
  )
}
